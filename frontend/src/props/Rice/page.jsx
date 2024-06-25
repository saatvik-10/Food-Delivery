import React from "react";
import MenuCards from "../../components/Menu/MenuCards";
import Rice from "../../components/images/menu/Rice/Rice.png";
import JRice from "../../components/images/menu/Rice/JRice.jpeg";
import CBiryani from "../../components/images/menu/Rice/CBiryani.png";

const carouselItems = [
  {
    image: Rice,
    subTitle: "Plain Rice",
    description:
      "Simple and fluffy steamed white rice, serving as a versatile and neutral base for various Indian curries and dishes.",
  },
  {
    image: JRice,
    subTitle: "Jeera Rice",
    description:
      " Fragrant basmati rice sautéed with cumin seeds (jeera) and lightly seasoned, adding a subtle nutty flavor and aroma.",
  },
  {
    image: CBiryani,
    subTitle: "Chicken Biyani",
    description:
      " A fragrant and flavorful rice dish where marinated chicken is layered with spiced basmati rice, cooked together with aromatic herbs and saffron.",
  },
];

export default function RiceItems({ title }) {
  return (
    <div className="">
      <h2 className="my-3 flex items-center justify-center font-serif text-2xl font-semibold text-orange-600 md:text-6xl">
        {title}
      </h2>
      <MenuCards carouselItems={carouselItems} />
    </div>
  );
}
