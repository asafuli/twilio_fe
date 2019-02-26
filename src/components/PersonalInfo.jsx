import React, { useState } from 'react';
import io from 'socket.io-client';
import config from '../config/config';

const PersonalInfo = ({ uid }) => {
  const { chatMessages, setChatMessages } = useState([]);

  const chatConnect = () => {
    const socket = io(config.serverUrl);
    socket.on('chat message', msg => setChatMessages(chatMessages.push(msg)));
  };
  return (
    <div>
      <p>{uid}</p>
      <button className='secondary' onClick={() => chatConnect()}>
        Connect to chat
      </button>
      <h3>Chat messages!</h3>
      <ul>
        {chatMessages.map(msg => (
          <li>msg</li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalInfo;
