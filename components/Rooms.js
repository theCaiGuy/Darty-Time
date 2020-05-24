import React from 'react';

import * as colors from '../constants/color_scheme';

const rooms_container = {
  alignItems: 'center',
  width: '90%',
  marginLeft: '5%',
  marginRight: '5%',
  height: 'auto',
  overflow: 'auto'
};

const btn_style = {
  fontSize: '69px',
  fontFamily: 'Brush Script MT, Helvetica Neue, Helvetica, Arial, sans-serif',
  padding: '20px',
  borderRadius: '20px',
  cursor: 'pointer',
  marginTop: '30px',
  marginBottom: '30px',
  textAlign: 'center'
};

class Rooms extends React.Component {
  render() {
    return (
      <div style={rooms_container}>
        <div
          style={{
            ...btn_style,
            color: 'white',
            backgroundColor: colors.BLUE
          }}
          onClick={() => {
            window.open('https://stanford.zoom.us/j/92401936756');
          }}
        >
          Zoom
        </div>
        <div
          style={{
            ...btn_style,
            color: 'white',
            backgroundColor: colors.PINK
          }}
          onClick={() => {
            window.open('https://skribbl.io/?McMHLiKdtdIU');
          }}
        >
          Skribbl.io
        </div>
        <div
          style={{
            ...btn_style,
            color: 'white',
            backgroundColor: colors.SOLO_CUP
          }}
          onClick={() => {
            window.open('https://challonge.com/dartytime');
          }}
        >
          Cup Pong
        </div>
      </div>
    );
  }
}

export default Rooms;
