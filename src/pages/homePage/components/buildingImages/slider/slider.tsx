import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './slider.styles.scss';


function Slider(props: any) {
  return (
    <Carousel>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FqU67rTXuHOA%2Fmaxresdefault.jpg&f=1&nofb=1"
        alt=""
      />
      <img
        src="https://s3.amazonaws.com/assets.moveglobally.com/property_images/480014/8939040/EB-AV0014.JPG?1507833305"
        alt=""
      />
      <img
        src="https://greenhostjal.files.wordpress.com/2016/10/foto-nh.jpg?w=1322&h=757&crop=1"
        alt=""
      />
    </Carousel>
  );
}

export default Slider;
