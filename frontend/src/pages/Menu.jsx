import React from "react";
import { Separator } from "../components/ui/separator";
import VegStarters from "../props/vegStarters/page";

function Menu() {
  return (
    <div className="container py-24">
      <VegStarters title={"VEG STARTERS"} />
      <Separator className="my-8" />
    </div>
  );
}

export default Menu;
