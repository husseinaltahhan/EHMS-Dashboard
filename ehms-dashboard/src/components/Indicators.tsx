import { Badge } from './ui/badge'

function Indicators({ className, ...props }: React.ComponentProps<"div">){
    return (
        <Badge className="col-start-2 row-start-1 row-span-2 bg-green-200 text-green-700 justify-self-end self-center">
            Stable
        </Badge>
    )
}

export default Indicators