import ConditionIndicator from './ConditionIndicator'
import FilterButton from './FilterButton'
import type { Patient } from '../hooks/usePatients'
import type { State } from '../types'

interface Props {
    patients : Patient[]
}

function Header({ patients } : Props){
    const count = (state : State) => patients.filter((p) => p.status === state).length

    return(
        <div className="flex flex-row justify-between items-center">
            <div>
                <h1 className="text-lg">Waiting Room Monitoring</h1>
                <p className="text-sm">Live telemetry data from all connected patients</p>
            </div>
            <ConditionIndicator state="Stable" patientNumber={count("Stable")} />
            <ConditionIndicator state="Unstable" patientNumber={count("Unstable")} />
            <ConditionIndicator state="Critical" patientNumber={count("Critical")}/>
            <FilterButton />
        </div>
    )
}

export default Header;