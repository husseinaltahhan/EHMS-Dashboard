import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

interface Props {
    vitalname : string;
    value : number;
}

function VitalTracker(props : Props){
    return(
        <div className="flex flex-col w-40">
            <Item className="p-0">
                <ItemContent>
                <ItemTitle className="text-s text-muted-foreground">{props.vitalname}</ItemTitle>
                <h1 className="text-xl self-center justify-self-center">{props.value}</h1>
                </ItemContent>
            </Item>
        </div>
    )
}

export default VitalTracker