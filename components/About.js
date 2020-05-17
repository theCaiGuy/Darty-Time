import React from 'react';

import * as colors from '../constants/color_scheme';

const chat_container = {
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
    return <div style={chat_container}>Hello and welcome.</div>;
  }
}

export default About;
