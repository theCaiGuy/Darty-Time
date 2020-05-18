import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import * as colors from '../constants/color_scheme';

const about_container = {
  alignItems: 'stretch',
  width: '100%',
  height: 'auto',
  fontSize: '36px',
  color: colors.GRAY,
  textAlign: 'center'
};

const quote_container = {
  width: '95%',
  marginLeft: '2.5%',
  marginRight: '2.5%'
};

const quote_style = {
  width: '33.3%',
  height: '100%',
  fontSize: '20px',
  marginTop: '20px',
  color: colors.GRAY,
  float: 'left'
};

class About extends React.Component {
  render() {
    return (
      <div style={about_container}>
        <img src={'../static/darty.gif'} style={{ width: '100%' }} />
        <div style={quote_container}>
          <div style={quote_style}>
            <FontAwesomeIcon icon={['fas', 'quote-left']} color={colors.BLUE} />
            <p>
              <b>"This is probably gonna fail"</b>
              <br /> ~ Me
            </p>
          </div>
          <div style={quote_style}>
            <FontAwesomeIcon icon={['fas', 'quote-left']} color={colors.BLUE} />
            <p>
              <b>"I'm showing up HAMMERED"</b>
              <br /> ~ Natalie Stiner
            </p>
          </div>
          <div style={quote_style}>
            <FontAwesomeIcon icon={['fas', 'quote-left']} color={colors.BLUE} />
            <p>
              <b>"Happy birthday!"</b>
              <br /> ~ My mom
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
