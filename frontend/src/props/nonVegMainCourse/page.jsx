import React from "react";
import MenuCards from "../../components/Menu/MenuCards";
import Mutton from "../../components/images/menu/NonVegItems/MainCourse/Mutton.jpg";
import Nihari from "../../components/images/menu/NonVegItems/MainCourse/Nihari.jpg";
import RMurgh from "../../components/images/menu/NonVegItems/MainCourse/RMurgh.jpg";
import KKaleji from "../../components/images/menu/NonVegItems/MainCourse/KKaleji.jpg";
import CChangezi from "../../components/images/menu/NonVegItems/MainCourse/CChangezi.jpg";
import BChicken from "../../components/images/menu/NonVegItems/MainCourse/BChicken.jpg";

const carouselItems = [
  {
    image: Mutton,
    subTitle: "Mutton",
    description:
      "Tender and flavorful pieces of mutton, often slow-cooked with a variety of spices to enhance its rich taste, commonly featured in hearty curries or stews.",
  },
  {
    image: KKaleji,
    subTitle: "Keema Kaleji",
    description:
      "A spicy and savory dish made with minced meat (keema) and liver (kaleji), cooked together with a blend of traditional spices, onions, and tomatoes.",
  },
  {
    image: CChangezi,
    subTitle: "Chicken Changezi",
    description:
      "A Mughlai dish featuring succulent chicken pieces cooked in a rich and creamy tomato-based gravy, infused with a medley of aromatic spices.",
  },
  {
    image: Nihari,
    subTitle: "Nihari",
    description:
      " A slow-cooked stew typically made with beef or lamb shanks, simmered overnight with a mix of spices, creating a deeply flavorful and tender meat dish.",
  },
  {
    image: BChicken,
    subTitle: "Butter Chicken",
    description:
      "An iconic North Indian dish with chicken cooked in a creamy, buttery tomato sauce, known for its velvety texture and mildly spiced flavor.",
  },
  {
    image: RMurgh,
    subTitle: "Rara Murgh",
    description:
      "A robust chicken curry where tender pieces of chicken are cooked with a minced chicken (keema) gravy, resulting in a rich and hearty dish.",
  },
];

function NonVegMainCourse({ title }) {
  return (
    <div className="">
      <h2 className="my-3 flex items-center justify-center font-serif text-2xl font-semibold text-orange-600 md:text-6xl">
        {title}
      </h2>
      <MenuCards carouselItems={carouselItems} />
    </div>
  );
}

export default NonVegMainCourse;
