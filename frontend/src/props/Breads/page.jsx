import React from "react";
import MenuCards from "../../components/Menu/MenuCards";
import BNaan from "../../components/images/menu/Breads/BNaan.jpg";
import GBNaan from "../../components/images/menu/Breads/GBNaan.jpg";
import Rumali from "../../components/images/menu/Breads/Rumali.jpg";

const carouselItems = [
  {
    image: BNaan,
    subTitle: "Butter Naan",
    description:
      "Soft and fluffy Indian flatbread brushed with melted butter, often baked in a tandoor, resulting in a slightly crisp and golden exterior.",
    price1: "1 Piece | Rs.35",
    price2: "2 Piece | Rs.50",
  },
  {
    image: GBNaan,
    subTitle: "Garlic Naan",
    description:
      " A flavorful variation of naan infused with minced garlic and herbs, baked until golden and typically served with a variety of Indian curries.",
    price1: "1 Piece | Rs.45",
    price2: "2 Piece | Rs.70",
  },
  {
    image: Rumali,
    subTitle: "Rumali",
    description:
      "A thin and soft flatbread known for its handkerchief-like texture, usually cooked on an inverted wok, and commonly paired with rich and spicy dishes.",
    price1: "1 Piece | Rs.30",
    price2: "2 Piece | Rs.45",
  },
];

function Breads({ title }) {
  return (
    <div className="">
      <h2 className="my-3 flex items-center justify-center font-serif text-2xl font-semibold text-orange-600 md:text-6xl">
        {title}
      </h2>
      <MenuCards carouselItems={carouselItems} />
    </div>
  );
}

export default Breads;
