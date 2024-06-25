import React from "react";
import { Card } from "../../components/ui/card";

const reviews = [
  {
    name: "Anandita Babar",
    date: "Feb 9, 2024",
    review:
      "As a customer, I had an amazing experience on this website. The user-friendly interface made it easy to explore the delicious food options, and the detailed descriptions helped me choose the perfect dishes. The checkout process was smooth, and my order arrived promptly, with every item tasting fresh and flavorful. Overall, I'm very impressed with the quality of both the website and the food, and I'll definitely be returning for more.",
  },
  {
    name: "Chriag Bhalotia",
    date: "June 30, 2024",
    review:
      "As a first-time customer, I was thoroughly impressed with the entire experience. The website was easy to use, and the food exceeded my expectations. The dishes were flavorful and arrived hot and fresh. I will definitely be ordering again!",
  },
  {
    name: "Ishan Magarde",
    date: "Nov 26, 2024",
    review:
      "I had a fantastic experience ordering from this website. The interface is user-friendly, making it easy to browse through the wide variety of dishes available. My order arrived promptly, and the food was hot, fresh, and bursting with flavor. The attention to detail and quality of service were impressive. I will definitely be recommending this to my family and friends!",
  },
];

export default function Reviews() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {reviews.map((item, key) => (
        <Card key={key} className="rounded-xl border-2 border-red-600 p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-md font-semibold text-orange-600 md:text-xl">
              {item.name}
            </span>
            <span className="text-xs text-gray-600 md:text-sm">
              {item.date}
            </span>
          </div>
          <p className="text-sm font-medium md:text-base">{item.review}</p>
        </Card>
      ))}
    </div>
  );
}
