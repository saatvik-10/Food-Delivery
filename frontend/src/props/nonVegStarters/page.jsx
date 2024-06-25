import React from "react";
import MenuCards from "../../components/Menu/MenuCards";
import GKebab from "../../components/images/menu/NonVegItems/Starters/GKebab.jpg";
import TChicken from "../../components/images/menu/NonVegItems/Starters/TChicken.jpg";
import CKebab from "../../components/images/menu/NonVegItems/Starters/CKebab.jpg";
import FTikka from "../../components/images/menu/NonVegItems/Starters/FTikka.jpg";
import CAfghani from "../../components/images/menu/NonVegItems/Starters/CAfghani.jpg";
import CLollipop from "../../components/images/menu/NonVegItems/Starters/CLollipop.jpg";

const carouselItems = [
  {
    image: GKebab,
    subTitle: "Mutton Galouti",
    description:
      "From Lucknow, Delicately spiced and melt-in-the-mouth mutton kebabs, made with finely minced meat and aromatic spices, known for their velvety texture.",
  },
  {
    image: TChicken,
    subTitle: "Tandoori Chicken",
    description:
      "Marinated chicken pieces cooked in a tandoor (clay oven), characterized by their smoky flavor and vibrant red hue from spices and yogurt.",
  },
  {
    image: CKebab,
    subTitle: "Chicken Kebab",
    description:
      "Juicy and flavorful skewers of marinated chicken, grilled or baked, often enjoyed with mint chutney and lemon wedges.",
  },
  {
    image: FTikka,
    subTitle: "Fish Tikka",
    description:
      "Succulent fish chunks marinated in a blend of yogurt and spices, then grilled or baked to perfection, offering a smoky and spicy taste.",
  },
  {
    image: CAfghani,
    subTitle: "Chicken Afghani",
    description:
      "Creamy and mildly spiced chicken dish marinated with cream, yogurt, and subtle spices, known for its rich and delicate flavors.",
  },
  {
    image: CLollipop,
    subTitle: "Chicken Lollipop",
    description:
      "A popular appetizer made from chicken wings frenched to resemble lollipops, marinated and deep-fried to a crispy finish.",
  },
];

function NonVegStarter({ title }) {
  return (
    <div className="">
      <h2 className="my-3 flex items-center justify-center font-serif text-2xl font-semibold text-orange-600 md:text-6xl">
        {title}
      </h2>
      <MenuCards carouselItems={carouselItems} />
    </div>
  );
}

export default NonVegStarter;
