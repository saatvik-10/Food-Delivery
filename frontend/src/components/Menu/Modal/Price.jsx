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
import { RadioGrp } from "./RadioGrp/RadioGrp";

export function Price({ subTitle, price1, price2 }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-max rounded-md bg-gray-900 text-center">
          Add to Cart
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{subTitle}</DialogTitle>
          <DialogDescription>Customise as per your taste</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center">
            <RadioGrp price1={price1} price2={price2} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add Item</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
