import React from 'react';
import { connect } from 'react-redux';
import { fetchAvailableDevices, transferPlaybackToDevice } from '../actions/devicesActions';
import { getIsFetchingDevices } from '../reducers';
import { getDevices } from '../reducers';
import * as colors from '../constants/color_scheme.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const deviceList = {
  listStyle: 'none',
  padding: 0,
  marginTop: '0px',
  width: '100%'
};

const deviceStyle = {
  height: 'auto',
  minHeight: '50px',
  alignItems: 'center',
  fontSize: '18px',
  borderRadius: '10px'
};

const passiveText = {
  color: colors.GRAY,
  padding: '8px'
};

const activeText = {
  color: colors.GRAY,
  fontWeight: 'bold',
  padding: '8px'
};

const btn_style = {
  backgroundColor: colors.GREEN,
  border: '0px',
  borderRadius: '20px',
  color: 'white',
  fontSize: '18px',
  padding: '10px',
  marginTop: '5px',
  cursor: 'pointer'
};

class Devices extends React.PureComponent {
  state = {
    selected: -1
  };

  render() {
    const { devices, isFetching, fetchAvailableDevices, transferPlaybackToDevice } = this.props;
    return (
      <div>
        <style jsx>{`
          .deviceStyle:hover {
            background-color: #eee;
            cursor: pointer;
          }
        `}</style>
        {devices.length === 0 ? (
          <button
            style={btn_style}
            disabled={isFetching}
            onClick={() => {
              fetchAvailableDevices();
            }}
          >
            Search for Available Devices
          </button>
        ) : (
          <div>
            <ul style={deviceList}>
              {devices.map((device, index) => {
                return (
                  <li
                    key={index}
                    style={deviceStyle}
                    className="deviceStyle"
                    onClick={() => {
                      if (!device.is_active) {
                        transferPlaybackToDevice(device.id);
                        window.location.reload(false);
                      }
                    }}
                  >
                    {device.is_active ? (
                      <div style={activeText}>
                        {device.name}
                        <FontAwesomeIcon icon={['fas', 'headphones']} color="black" style={{ marginLeft: '5px' }} />
                      </div>
                    ) : (
                      <p style={passiveText}>{device.name}</p>
                    )}
                  </li>
                );
              })}
            </ul>
            <button
              style={btn_style}
              disabled={isFetching}
              onClick={() => {
                fetchAvailableDevices();
              }}
            >
              Refresh Device List
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAvailableDevices: index => dispatch(fetchAvailableDevices(index)),
  transferPlaybackToDevice: deviceId => dispatch(transferPlaybackToDevice(deviceId))
});

const mapStateToProps = state => ({
  isFetching: getIsFetchingDevices(state),
  devices: getDevices(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Devices);
