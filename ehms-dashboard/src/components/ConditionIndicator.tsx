import Indicators from './Indicators'


function ConditionIndicator(){
    return(
        <div className="flex h-12 px-4 gap-6 bg-background rounded-sm ring-1 ring-foreground/10 justify-center items-center">
            <h1>Stable</h1>
            <Indicators state={"3 patients"} />
        </div>
    )
}

export default ConditionIndicator