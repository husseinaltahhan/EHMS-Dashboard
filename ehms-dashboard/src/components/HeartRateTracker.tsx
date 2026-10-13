import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { cn } from "@/lib/utils"

interface Props extends React.ComponentProps<"div">{
    heartRate : number
}

function HeartRateTracker({heartRate, className} : Props){
    return(
        <div className={cn("flex flex-col w-80" , className)}>
            <Item className="h-full p-0">
                <ItemContent className="h-full">
                <ItemTitle className="text-muted-foreground">Heart Rate</ItemTitle>
                <div className="flex h-full items-center justify-center">
                    <h1 className="text-5xl text-primary">{heartRate}</h1>
                </div>
                </ItemContent>
            </Item>
        </div>
    )
}

export default HeartRateTracker