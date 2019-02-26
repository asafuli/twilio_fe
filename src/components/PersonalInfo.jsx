import React from 'react';
import io from 'socket.io-client';
import config from '../config/config';

const PersonalInfo = ({ uid }) => {
  const chatConnect = () => {
    const socket = io(config.serverUrl);
  }
  return (
    <div>
      <p>{uid}</p>
      <button className="secondary" onClick={() => chatConnect()} >
        Connect to chat
      </button>
    </div>
  )
  
};

export default PersonalInfo;



