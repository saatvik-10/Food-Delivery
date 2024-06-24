import React from 'react';
import MenuCards from '../../components/Menu/MenuCards';

const carouselItems = [
  {
    images:'',
    subtitle: '',
    description: ''
  }
]

function VegMainCourse({ title }) {
  return (
    <div className="">
      <h2 className="my-3 flex items-center justify-center font-serif text-2xl md:text-6xl font-semibold text-orange-600">
        {title}
      </h2>
      <MenuCards carouselItems={carouselItems} />
    </div>
  );
}

export default VegMainCourse;
