import React from 'react';
import { Slide } from 'react-slideshow-image';
import "./BannerSlideshow.css"
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];

const BannerSlideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Dashain Offer !</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>New Arrivals !</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Flash Sale !</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default BannerSlideshow;
