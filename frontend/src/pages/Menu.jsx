import React from "react";
import { Separator } from "../components/ui/separator";
import VegStarters from "../props/vegStarters/page";
import VegMainCourse from "../props/vegMainCourse/page";
import NonVegStarter from "../props/nonVegStarters/page";
import NonVegMainCourse from "../props/nonVegMainCourse/page";
import Breads from "../props/Breads/page";
import RiceItems from "../props/Rice/page";
import Sweets from "../props/Sweets/page";

function Menu() {
  return (
    <div className="container my-5">
      <VegStarters title={"VEG STARTERS"} />
      <Separator className="my-16" />
      <VegMainCourse title={"VEG MAIN COURSE"} />
      <Separator className="my-16" />
      <NonVegStarter title={"NON-VEG STARTERS"} />
      <Separator className="my-16" />
      <NonVegMainCourse title={"NON-VEG MAIN COURSE"} />
      <Separator className="my-16" />
      <Breads title={"BREADS"} />
      <Separator className="my-16" />
      <RiceItems title={"RICE"} />
      <Separator className="my-16" />
      <Sweets title={"SWEETS"} />
    </div>
  );
}

export default Menu;
