import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
// import { RadioGrp } from "./RadioGrp/RadioGrp";
import Counter from "../Modal/Counter";

export function Price({ subTitle, price1, price2 }) {
  const prices = [price1, price2];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-max rounded-md bg-gray-900 text-center">
          Add to Cart
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[375px]">
        <DialogHeader>
          <DialogTitle>{subTitle}</DialogTitle>
          <DialogDescription>Customise as per your taste</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center">
            <Counter prices={prices} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add Item</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
