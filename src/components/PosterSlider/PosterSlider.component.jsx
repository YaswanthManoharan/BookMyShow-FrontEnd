import React from 'react';
import Slider from 'react-slick';
//components
import Poster from '../Poster/poster.component';
//configs
import PosterCarousalSettings from '../../config/PosterCarousal.config';
import PremierImages from '../../config/TempPosters.config';
export const PosterSlider = (props) => {
    return <>
    <div className="flex flex-col items-start">
      <h3 className="text-white text-xl font-bold">
        {props.title}
      </h3>
      <p className="text-white text-xm">
      {props.subtitle}
      </p>
    </div>
    <Slider {...PosterCarousalSettings}>
        {props.images.map((image)=> <Poster {...image} isDark />)}
    </Slider>
    </>
};

export default PosterSlider;
