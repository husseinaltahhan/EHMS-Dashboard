import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

function HeartRateTracker({ className, ...props }: React.ComponentProps<"div">){
    return(
        <div className="flex flex-col w-80">
            <Item className="h-full p-0">
                <ItemContent className="h-full">
                <ItemTitle className="text-muted-foreground">Heart Rate</ItemTitle>
                <div className="flex h-full items-center justify-center">
                    <h1 className="text-5xl text-primary">72</h1>
                </div>
                </ItemContent>
            </Item>
        </div>
    )
}

export default HeartRateTracker