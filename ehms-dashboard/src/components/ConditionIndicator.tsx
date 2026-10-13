import Indicators from './Indicators'
import type { State } from "../types"

interface Props {
    state : State,
    patientNumber? : number
}

function ConditionIndicator({ state, patientNumber }: Props) {
    const isCount = patientNumber !== undefined

    return (
        <div className="flex h-12 px-4 gap-6 bg-background rounded-sm ring-1 ring-foreground/10 justify-center items-center">
            {isCount && <h1>{state}</h1>}
            <Indicators state={state} patientNumber={patientNumber} />
        </div>
    )
}

export default ConditionIndicator