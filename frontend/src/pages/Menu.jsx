import React from "react";
import { Separator } from "../components/ui/separator";
import VegStarters from "../props/vegStarters/page";
import VegMainCourse from "../props/vegMainCourse/page";

function Menu() {
  return (
    <div className="container ">
      <VegStarters title={"VEG STARTERS"} />
      <Separator className="my-8" />
      <VegMainCourse title={'VEG MAIN COURSE'} />
      <Separator className="my-8" />
    </div>
  );
}

export default Menu;
