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
        <Indicators />
      </CardHeader>
      <CardContent className="flex flex-row">
            <HeartRateTracker className="flex" />
            <div className="flex flex-col">
                <VitalTracker vitalname={"O2 Saturation"} value={98} />
                <VitalTracker vitalname={"O2 Saturation"} value={98} />
                <VitalTracker vitalname={"O2 Saturation"} value={98} />
            </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
      </CardFooter>
    </Card>
  )
}

export default PatientCard;
