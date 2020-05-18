import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import * as colors from '../constants/color_scheme';

const slideImages = [
  '../static/slideshow/IMG_1085.png',
  '../static/slideshow/IMG_2921.jpeg',
  '../static/slideshow/IMG_4316.jpeg',
  '../static/slideshow/IMG_6538.jpeg',
  '../static/slideshow/IMG_6712.jpeg',
  '../static/slideshow/IMG_6969_2.png',
  '../static/slideshow/IMG_6969.png'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true
  // onChange: (oldIndex, newIndex) => {
  //   console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  // }
};

const about_container = {
  alignItems: 'stretch',
  width: '95%',
  marginLeft: '2.5%',
  marginRight: '2.5%',
  height: 'auto',
  fontSize: '36px',
  color: colors.GRAY,
  textAlign: 'left'
};

class About extends React.Component {
  render() {
    return (
      <div style={about_container}>
        {/* <Carousel>
          {
            slideImages.map((img) => {
              <Carousel.Item>
                <img
                  src={img}
                />
              </Carousel.Item>
            })
          }
        </Carousel> */}
        <Carousel>
          <Carousel.Item>
            <img src={slideImages[0]} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={slideImages[1]} />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default About;
