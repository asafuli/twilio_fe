import React, { useState } from 'react';
import io from 'socket.io-client';
import config from '../config/config';

const PersonalInfo = ({ uid }) => {
  const { chatMessages, setChatMessages } = useState([]);
  const socket = io(config.serverUrl);

  socket.on('chat message', msg => setChatMessages(chatMessages.push(msg)));

  const handleSubmit = e => {
    e.preventDefault();
    socket.emit('chat message', e.value);
  };

  return (
    <div>
      <p>{uid}</p>
      <form onSubmit={e => handleSubmit(e)}>
        <input type='text' value='Type here...' />
        <input type='submit' value='Send' />
      </form>
      <h3>Chat messages!</h3>
      <ul>{chatMessages && chatMessages.map(msg => <li>msg</li>)}</ul>
    </div>
  );
};

export default PersonalInfo;
