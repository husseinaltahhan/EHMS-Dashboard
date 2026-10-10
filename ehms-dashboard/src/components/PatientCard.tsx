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
function PatientCard() {
  return (
    <Card className="w-200px max-w-sm">
      <CardHeader>
        <CardTitle>John Doe</CardTitle>
        <CardDescription>
            Room 304 • Male, 45y
        </CardDescription>
        <Indicators className="col-start-2 row-start-1 row-span-2" state={"Stable"} />
      </CardHeader>
      <CardContent className="flex flex-row">
            <HeartRateTracker className="flex" />
            <div className="flex flex-col">
                <VitalTracker vitalname={"O2 Sat"} value={98} />
                <VitalTracker vitalname={"Temperature"} value={"99.1°F"} />
                <VitalTracker vitalname={"ECG"} value={"Normal"} />
            </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
      </CardFooter>
    </Card>
  )
}

export default PatientCard;
