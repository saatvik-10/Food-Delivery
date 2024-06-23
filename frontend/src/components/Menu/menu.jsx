import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import VegStarters from '../../props/vegStarters/page';

export default function MenuCardsVegStarter(props) {
  return (
    <div>
      <VegStarters title={'Veg Starters'} />
      <Carousel plugins={[Autoplay({ delay: 2800 })]} className='w-full'>
        <CarouselContent>
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-3xl font-semibold'>{index + 1}</span>
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
