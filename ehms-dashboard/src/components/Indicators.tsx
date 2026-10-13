import { Badge } from './ui/badge'
import { cn } from "@/lib/utils"
import type { State } from "@/types"

interface Props {
    state: State
    className?: string
    patientNumber? : number
}

const stateStyles: Record<State, string> = {
    Stable: "bg-green-200 text-green-700 dark:bg-green-900 dark:text-green-300",
    Unstable: "bg-yellow-200 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
    Critical: "bg-red-200 text-red-700 dark:bg-red-900 dark:text-red-300",
}

function Indicators({ state, patientNumber, className }: Props) {
    const label =
        patientNumber === undefined
            ? state
            : `${patientNumber} ${patientNumber === 1 ? "patient" : "patients"}`

    return (
        <Badge className={cn("justify-self-end self-center", stateStyles[state], className)}>
            {label}
        </Badge>
    )
}

export default Indicators

// col-start-2 row-start-1 row-span-2