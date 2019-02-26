import React, { useState } from 'react';
import io from 'socket.io-client';
import config from '../config/config';

const PersonalInfo = ({ uid }) => {
  const [chatMessages, setChatMessages] = useState([]);
  console.log(chatMessages);
  const [currentMessage, setCurrentMessage] = useState('');
  const socket = io(config.serverUrl);

  socket.on('chat message', msg => {
    console.log(msg);
    console.log(chatMessages);
    setChatMessages(chatMessages.push(msg));
    console.log(chatMessages);
  });

  const handleSubmit = e => {
    e.preventDefault();
    socket.emit('chat message', currentMessage);
    setCurrentMessage('');
  };

  const handleChange = e => {
    setCurrentMessage(e.target.value);
  };

  return (
    <div>
      <p>{uid}</p>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type='text'
          value={currentMessage}
          onChange={e => handleChange(e)}
        />
        <input type='submit' value='Send' />
      </form>
      <h3>Chat messages!</h3>
      {/* <ul>{chatMessages && chatMessages.map(msg => <li>msg</li>)}</ul> */}
    </div>
  );
};

export default PersonalInfo;
