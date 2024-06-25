import React from "react";
import { Separator } from "../components/ui/separator";
import VegStarters from "../props/vegStarters/page";
import VegMainCourse from "../props/vegMainCourse/page";
import NonVegStarter from "../props/nonVegStarters/page";

function Menu() {
  return (
    <div className="container my-5">
      <VegStarters title={"VEG STARTERS"} />
      <Separator className="my-16" />
      <VegMainCourse title={"VEG MAIN COURSE"} />
      <Separator className="my-16" />
      <NonVegStarter title={"NON-VEG STARTERS"} />
      <Separator className="my-16" />
    </div>
  );
}

export default Menu;
