import ConditionIndicator from './ConditionIndicator'
import FilterButton from './FilterButton'

function Header(){
    return(
        <div className="flex flex-row justify-between items-center">
            <div>
                <h1 className="text-lg">Waiting Room Monitoring</h1>
                <p className="text-sm">Live telemetry data from all connected patients</p>
            </div>
            <ConditionIndicator state="Stable" patientNumber={1} />
            <ConditionIndicator state="Unstable" patientNumber={0} />
            <ConditionIndicator state="Critical" patientNumber={1}/>
            <FilterButton />
        </div>
    )
}

export default Header;