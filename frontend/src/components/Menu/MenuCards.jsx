import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "../../../src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../src/components/ui/carousel";
import { Price } from "./Modal/Price";

export default function MenuCards({ carouselItems, title }) {
  return (
    <div>
      <Carousel plugins={[Autoplay({ delay: 3000 })]} className="w-full">
        <CarouselContent>
          {carouselItems.map((items, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <span>{title}</span>
              <div className="p-1">
                <Card className="shadow-lg">
                  <CardContent className="flex flex-col gap-y-2 overflow-hidden p-2">
                    <div className="aspect-[300/200] overflow-hidden">
                      <img
                        className="transform rounded-t-md transition-transform duration-700 hover:scale-110"
                        alt=""
                        src={items.image}
                      />
                    </div>
                    <span className="text-xl font-semibold text-gray-900 md:text-3xl">
                      {items.subTitle}
                    </span>
                    <p className="text-sm text-gray-500 md:text-base">
                      {items.description}
                    </p>
                    <div className="flex justify-end">
                      {/* <Button className="w-max rounded-md bg-gray-900 text-center"> */}
                      <Price
                        subTitle={items.subTitle}
                        price1={items.price1}
                        price2={items.price2}
                      />
                      {/* </Button> */}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
