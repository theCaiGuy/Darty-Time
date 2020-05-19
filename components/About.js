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
  marginTop: '40px',
  marginBottom: '40px',
  color: colors.GRAY,
  float: 'left'
};

const tell_me_button = {
  fontSize: '20px',
  padding: '20px',
  borderRadius: '20px',
  backgroundColor: colors.PINK,
  color: 'white',
  cursor: 'pointer',
  marginBottom: '20px'
};

const modal_style = {
  width: '90%',
  marginLeft: '5%',
  marginRight: '5%',
  height: 'auto'
};

const modal_text = {
  width: '100%',
  height: 'auto',
  color: colors.GRAY,
  fontSize: '20px',
  textAlign: 'left',
  marginTop: '20px',
  marginBottom: '20px'
};

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal_open: false
    };
  }

  render() {
    return (
      <div style={about_container}>
        <img src={'../static/darty.gif'} style={{ width: '100%' }} />
        <div style={quote_container}>
          <div style={quote_style}>
            <FontAwesomeIcon icon={['fas', 'quote-left']} color={colors.BLUE} />
            <p>
              <b>"This is probably gonna crash"</b>
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
          <div style={modal_style}>
            {this.state.modal_open ? (
              <div>
                <button
                  style={tell_me_button}
                  onClick={() => {
                    this.setState({
                      modal_open: false
                    });
                  }}
                >
                  Tell me less!
                </button>
                <div style={modal_text}>
                  Dear reader,
                  <br />
                  <br />
                  If you had told me last year on my birthday that my next birthday party would be 100% virtual, I would
                  probably not have remembered it. But if you had told me the day after, I absolutely would not have
                  believed you. In what universe could MY birthday, perfectly positioned at the peak of DARTY SZN, be
                  held virtually...on ZOOM??? And yet, here we are.
                  <br />
                  <br />
                  But birthdays aren't a time to mourn for a darty that could have been - rather, they are a time to
                  celebrate all that's good and wonderful about life. This year especially, with all that is happening
                  in this world, I wanted my birthday to be a celebration of all the amazing people who have made my
                  life so rich and so exciting. I hope that, despite all that has happened these last few months, this
                  website and this virtual darty can bring a little bit of joy to your life. Please join me in hopping
                  on the Zoom call, syncing our Spotify playlists, and enjoying some long-distance party games.
                  <br />
                  <br />
                  At the same time, I think it is important for us to remember those less fortunate than us, especially
                  as the Covid-19 crisis disproportionately impacts service workers, minorities, and immigrants. That is
                  why I hope you will join the GamePigeon Cup Pong tournament, where your $10 buy-in contribution will
                  be donated to charities selected by the 1st, 2nd, and 3rd place finishers. This way, our
                  tongue-in-cheek fun can go toward supporting those in need. Sadly, Cup Pong is only available on iOS
                  at the moment, but to my Android friends (and my iOS ones), if you are able, please consider donating
                  to my birthday fundraiser for Feeding America, a nonprofit running food banks across the United
                  States.
                  <br />
                  <br />
                  Thank you again for coming today. I hope you have a wonderful time. I love and appreciate you so much.
                  <br />
                  <br />
                  Michael
                </div>
              </div>
            ) : (
              <button
                style={tell_me_button}
                onClick={() => {
                  this.setState({
                    modal_open: true
                  });
                }}
              >
                Tell me more!
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
