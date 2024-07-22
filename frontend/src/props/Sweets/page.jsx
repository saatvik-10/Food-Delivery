import React from "react";
import MenuCards from "../../components/Menu/MenuCards";
import Jalebi from "../../components/images/menu/Sweets/Jalebi.jpg";
import Ghewar from "../../components/images/menu/Sweets/Ghewar.jpg";
import RMalai from "../../components/images/menu/Sweets/RMalai.jpg";

const carouselItems = [
  {
    image: Jalebi,
    subTitle: "Jalabi",
    description:
      "Crisp and syrupy spirals made from deep-fried batter, soaked in saffron-infused sugar syrup, offering a rich flavor and a vibrant golden hue.",
    price1: "Half | Rs.50",
    price2: "Full | Rs.80",
  },
  {
    image: Ghewar,
    subTitle: "Ghewar",
    description:
      "A traditional Rajasthani dessert, made from deep-fried disc-shaped batter, soaked in sugar syrup and often garnished with rabri (thickened milk) and dry fruits.",
    price1: "Half | Rs.300",
    price2: "Full | Rs.500",
  },
  {
    image: RMalai,
    subTitle: "Ras Malai",
    description:
      "Soft and spongy paneer (cottage cheese) balls soaked in creamy, saffron-infused milk, garnished with cardamom and chopped nuts.",
    price1: "Half | Rs.120",
    price2: "Full | Rs.200",
  },
];

export default function Sweets({ title }) {
  return (
    <div className="">
      <h2 className="my-3 flex items-center justify-center font-serif text-2xl font-semibold text-orange-600 md:text-6xl">
        {title}
      </h2>
      <MenuCards carouselItems={carouselItems} />
    </div>
  );
}
