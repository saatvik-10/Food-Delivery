import React from "react";
import MenuCards from "../../components/Menu/MenuCards";
import DMakhani from "../../components/images/menu/VegItems/MainCourse/Dmakhani.jpg";
import SPaneer from "../../components/images/menu/VegItems/MainCourse/SPaneer.jpg";
import KPaneer from "../../components/images/menu/VegItems/MainCourse/KPaneer.jpg";
import MVeg from "../../components/images/menu/VegItems/MainCourse/MVeg.jpg";
import MMasala from "../../components/images/menu/VegItems/MainCourse/MMasala.jpg";
import MKofta from "../../components/images/menu/VegItems/MainCourse/Mkofta.jpg";

const carouselItems = [
  {
    image: DMakhani,
    subTitle: "Dal Makhani",
    description:
      " A rich and creamy lentil curry made with whole black lentils and red kidney beans, simmered in butter and cream, and flavored with aromatic spices.",
    price1: "Half | Rs.180",
    price2: "Full | Rs.240",
  },
  {
    image: SPaneer,
    subTitle: "Shahi Paneer",
    description:
      "A luxurious North Indian dish featuring paneer cubes in a velvety, spiced tomato and cream gravy, enriched with capsicum and coriander leaves.",
    price1: "Half | Rs.190",
    price2: "Full | Rs.250",
  },

  {
    image: KPaneer,
    subTitle: "Kadhai Paneer",
    description:
      "A vibrant and spicy stir-fry of paneer cubes cooked with bell peppers, onions, and a blend of freshly ground spices, served in a traditional kadhai (wok).",
    price1: "Half | Rs.200",
    price2: "Full | Rs.260",
  },
  {
    image: MVeg,
    subTitle: "Mix Veg",
    description:
      " A colorful medley of seasonal vegetables sautéed and cooked in a mildly spiced curry, offering a wholesome and nutritious dish.",
    price1: "Half | Rs.170",
    price2: "Full | Rs.220",
  },
  {
    image: MMasala,
    subTitle: "Mushroom Masala",
    description:
      "A flavorful curry with tender mushrooms simmered in a tangy tomato-onion gravy, infused with aromatic spices and herbs.",
    price1: "Half | Rs.210",
    price2: "Full | Rs.280",
  },
  {
    image: MKofta,
    subTitle: "Malai Kofta",
    description:
      "Soft and creamy paneer and vegetable dumplings served in a rich and decadent tomato-based gravy, finished with a touch of cream.",
    price1: "Half | Rs.180",
    price2: "Full | Rs.230",
  },
];

function VegMainCourse({ title }) {
  return (
    <div className="">
      <h2 className="my-3 flex items-center justify-center font-serif text-2xl font-semibold text-orange-600 md:text-6xl">
        {title}
      </h2>
      <MenuCards carouselItems={carouselItems} />
    </div>
  );
}

export default VegMainCourse;
