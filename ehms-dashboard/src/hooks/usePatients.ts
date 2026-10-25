import { useEffect, useState } from 'react'
import type { State } from '../types'

// Backend WebSocket. Override with VITE_WS_URL in a .env file if the backend runs elsewhere.
const WS_URL = import.meta.env.VITE_WS_URL ?? `ws://${window.location.hostname}:8000/ws`
const RECONNECT_MS = 2000
const MIN_QUALITY = 0.5 // matches the backend detector

// Messages sent by EHMS-Backend/main.py
interface Sample {
    band_id: string
    ts: number
    hr?: number
    spo2?: number
    temp?: number
    quality?: number
    contact?: boolean
    battery?: number
    patient?: { name: string, sex: string, age: number } | null
}

interface Alert {
    band_id: string
    metric: string
    value: number
    raised_at: number
}

type Message =
    | { type: 'snapshot', samples: Sample[], alerts: Alert[] }
    | { type: 'sample', sample: Sample }
    | { type: 'raised' | 'cleared', alert: Alert }

export interface Patient {
    id: string
    name: string
    sex: string
    age: number
    heartRate: number
    o2Sat: number
    temp: number
    ecg: string
    status: State
}

function toPatient(sample: Sample, alerts: Alert[]): Patient {
    const badSignal = sample.contact === false || (sample.quality ?? 1) < MIN_QUALITY
    let status: State = 'Stable'
    if (alerts.some((a) => a.band_id === sample.band_id)) status = 'Critical'
    else if (badSignal) status = 'Unstable'

    return {
        id: sample.band_id,
        name: sample.patient?.name ?? sample.band_id,
        sex: sample.patient?.sex ?? 'Unknown',
        age: sample.patient?.age ?? 0,
        heartRate: Math.round(sample.hr ?? 0),
        o2Sat: Math.round(sample.spo2 ?? 0),
        temp: 0, // band doesn't report temperature yet
        ecg: '—',  // band doesn't report ECG yet
        status,
    }
}

// Live list of patients from the backend, kept up to date over a WebSocket (reconnects if it drops).
function usePatients() {
    const [samples, setSamples] = useState<Record<string, Sample>>({})
    const [alerts, setAlerts] = useState<Alert[]>([])

    useEffect(() => {
        let ws: WebSocket
        let retry: ReturnType<typeof setTimeout>
        let closed = false

        const connect = () => {
            ws = new WebSocket(WS_URL)

            ws.onmessage = (event) => {
                const msg: Message = JSON.parse(event.data)
                if (msg.type === 'snapshot') {
                    setSamples(Object.fromEntries(msg.samples.map((s) => [s.band_id, s])))
                    setAlerts(msg.alerts)
                } else if (msg.type === 'sample') {
                    setSamples((prev) => ({ ...prev, [msg.sample.band_id]: msg.sample }))
                } else if (msg.type === 'raised') {
                    setAlerts((prev) => [...prev, msg.alert])
                } else if (msg.type === 'cleared') {
                    setAlerts((prev) => prev.filter((a) =>
                        !(a.band_id === msg.alert.band_id && a.metric === msg.alert.metric)))
                }
            }

            ws.onclose = () => {
                if (!closed) retry = setTimeout(connect, RECONNECT_MS)
            }
        }

        connect()
        return () => {
            closed = true
            clearTimeout(retry)
            ws.close()
        }
    }, [])

    return Object.values(samples).map((s) => toPatient(s, alerts))
}

export default usePatients
