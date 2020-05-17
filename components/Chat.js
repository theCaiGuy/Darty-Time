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

class Chat extends React.Component {
  render() {
    return (
      <div style={chat_container}>
        <div style={chat_box}>
          <Iframe url="https://minnit.chat/BirthdayDarty?embed&transparent&nickname=" width="100%" height="100%" />
        </div>
        <a href="https://minnit.chat/BirthdayDarty" target="_blank" style={attribution}>
          Free HTML5 Chatroom powered by Minnit Chat
        </a>
      </div>
    );
  }
}

export default Chat;
