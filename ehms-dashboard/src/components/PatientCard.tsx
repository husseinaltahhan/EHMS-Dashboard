import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Indicators from './Indicators'
import HeartRateTracker from './HeartRateTracker'
import VitalTracker from './VitalTracker'
//import { Input } from "@/components/ui/input"
//import { Label } from "@/components/ui/label"

interface Props {
  name : string,
  sex : string,
  age : number,
  heartRate : number,
  o2Sat : number,
  temp : string,
  ecg : string,
  status : string,
}

function PatientCard(props : Props) {
  return (
    <Card className="w-200px max-w-sm">
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>
            Waiting Room • {props.sex}, {props.age}y
        </CardDescription>
        <Indicators className="col-start-2 row-start-1 row-span-2" state={props.status} />
      </CardHeader>
      <CardContent className="flex flex-row">
            <HeartRateTracker className="flex" heartRate={props.heartRate}/>
            <div className="flex flex-col">
                <VitalTracker vitalname={"O2 Sat"} value={props.o2Sat} />
                <VitalTracker vitalname={"Temperature"} value={props.temp} />
                <VitalTracker vitalname={"ECG"} value={props.ecg} />
            </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
      </CardFooter>
    </Card>
  )
}

export default PatientCard;
