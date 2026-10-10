import { Badge } from './ui/badge'
import { cn } from "@/lib/utils"

interface Props extends React.ComponentProps<"div">{
    state : string
}

function Indicators({state, className} : Props){
    return (
        <Badge className={cn("bg-green-200 text-green-700 justify-self-end self-center", className)}>
            {state}
        </Badge>
    )
}

export default Indicators

// col-start-2 row-start-1 row-span-2