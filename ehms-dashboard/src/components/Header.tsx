import ConditionIndicator from './ConditionIndicator'

function Header(){
    return(
        <div className="flex flex-row justify-between">
            <div>
                <h1>Waiting Room Monitoring</h1>
                <p>Live telemetry data from all connected patients</p>
            </div>
            <ConditionIndicator />
            <ConditionIndicator />
            <ConditionIndicator />
            <h1>Filter</h1>
        </div>
    )
}

export default Header;