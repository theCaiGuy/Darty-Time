import React from 'react';
import Iframe from 'react-iframe';

import * as colors from '../constants/color_scheme';

const chat_container = {
  alignItems: 'stretch',
  width: '100%',
  height: 'auto'
};

const chat_box = {
  width: '95%',
  marginLeft: '2.5%',
  marginRight: '2.5%',
  height: '690px',
  overflow: 'hidden'
};

const attribution = {
  fontSize: '12px',
  marginBottom: '10px'
};

class Donate extends React.Component {
  render() {
    return <div style={chat_container}>Hello</div>;
  }
}

export default Donate;
