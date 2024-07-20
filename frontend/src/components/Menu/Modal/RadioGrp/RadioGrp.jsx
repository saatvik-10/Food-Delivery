import { Label } from "../../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../../ui/radio-group";

export function RadioGrp({ price1, price2 }) {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center justify-between">
        <Label className="text-lg text-orange-700" htmlFor="r1">
          {price1}
        </Label>
        <RadioGroupItem value="default1" id="r1" />
      </div>
      <div className="flex items-center justify-between">
        <Label className="text-lg text-orange-700" htmlFor="r2">
          {price2}
        </Label>
        <RadioGroupItem value="default2" id="r2" />
      </div>
    </RadioGroup>
  );
}
