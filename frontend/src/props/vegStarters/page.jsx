import React from "react";
import MenuCards from "../../components/Menu/MenuCards";
import Achaap from "../../components/images/menu/VegItems/Starters/Achaap.png";
import Tchaap from "../../components/images/menu/VegItems/Starters/Tchaap.jpg";
import Mroom from "../../components/images/menu/VegItems/Starters/Mroom.jpg";
import Ptikka from "../../components/images/menu/VegItems/Starters/Ptikka.png";
import HBKebab from "../../components/images/menu/VegItems/Starters/HBKebab.jpg";
import Taloo from "../../components/images/menu/VegItems/Starters/Taloo.jpeg";

const carouselItems = [
  {
    image: Achaap,
    subTitle: "Afghani Soya Chaap",
    description:
      "Grilled dish from the Afghan cuisine, this chaap is seasoned with aromatic spices for a rich and savory flavor profile.",
    price1: "Half | Rs.120",
    price2: "Full | Rs.160",
  },
  {
    image: Tchaap,
    subTitle: "Tandoori Soya Chaap",
    description:
      "Experience the smoky, spice-rich flavors of Tandoori Soya Chaap, a delicious vegetarian delight from Indian cuisine grilled to perfection.",
    price1: "Half | Rs.110",
    price2: "Full | Rs.150",
  },
  {
    image: Mroom,
    subTitle: "Mushroom Tikka",
    description:
      "Discover the delectable charm of tender mushrooms marinated in aromatic spices, grilled to perfection and served with the vibrant flavors of Indian cuisine.",
    price1: "Half | Rs.130",
    price2: "Full | Rs.180",
  },
  {
    image: Ptikka,
    subTitle: "Paneer Tikka",
    description:
      "A classic Indian dish featuring marinated paneer cubes grilled to perfection.Spicy and Tangy flavoured, served hot with mint chutney.",
    price1: "Half | Rs.120",
    price2: "Full | Rs.170",
  },
  {
    image: HBKebab,
    subTitle: "Hara Bhara Kebab",
    description:
      "A vegetarian appetizer crafted from spinach, peas, and spices, cooked to a crispy finish and served with refreshing mint chutney.",
    price1: "Half | Rs.125",
    price2: "Full | Rs.175",
  },
  {
    image: Taloo,
    subTitle: "Tandoori Aloo",
    description:
      "Potatoes filled with a spicy paneer mixture, grilled for a smoky flavor. Served with mint chutney, offering a delightful blend of textures and Indian spices.",
    price1: "Half | Rs.110",
    price2: "Full | Rs.150",
  },
];

export default function VegStarters({ title, price1, price2 }) {
  return (
    <div className="">
      <h2 className="my-3 flex items-center justify-center font-serif text-2xl font-semibold text-orange-600 md:text-6xl">
        {title}
      </h2>
      <MenuCards carouselItems={carouselItems} />
    </div>
  );
}
