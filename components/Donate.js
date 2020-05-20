import React from 'react';

import * as colors from '../constants/color_scheme';

const donate_container = {
  width: '90%',
  marginLeft: '5%',
  marginRight: '5%'
};

const img_style = {
  width: '250px',
  height: 'auto',
  marginRight: '10px'
};

const text_style = {
  textAlign: 'left',
  color: colors.GRAY,
  marginBottom: '10px',
  marginTop: '10px'
};

class Donate extends React.Component {
  render() {
    return (
      <div style={donate_container}>
        <img src={'../static/feeding_america.png'} alt="Feeding America" style={img_style} />
        <p style={text_style}>
          In addition to the Cup Pong tournament fundraiser, I am also running a separate fundraiser for Feeding America
          via Facebook's birthday fundraisers. If you are able, please consider donating to help Feeding America run
          food banks for less fortunate people across the United States. With everyone's contributions, we can help
          people who are struggling with food insecurity, many of whom have lost their jobs for the first times. Thank
          you so much to everyone who has already donated!
        </p>
      </div>
    );
  }
}

export default Donate;
