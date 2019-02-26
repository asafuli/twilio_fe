import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import io from 'socket.io-client';
import config from '../config/config';

const socket = io(config.serverUrl, { transports: ['websocket'] });
const mapStateToProps = ({ loginReducer: loggedIn }) => loggedIn;

const connectedPersonalInfo = props => {
  const [chatMessages, setChatMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    socket.on('chat message', msg => {
      setChatMessages([...chatMessages, msg]);
      console.log(chatMessages);
    });
  });

  const handleSubmit = e => {
    e.preventDefault();
    socket.emit('chat message', currentMessage);
    setCurrentMessage('');
  };

  const handleChange = e => {
    setCurrentMessage(e.target.value);
  };

  return !props.loggedIn ? (
    <h1>Please login and start chatting!</h1>
  ) : (
    <div className='chat'>
      <p>{props.uid}</p>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type='text'
          value={currentMessage}
          onChange={e => handleChange(e)}
        />
        <input type='submit' value='Send' />
      </form>
      <h3>Chat messages!</h3>
      <ul>
        {chatMessages &&
          chatMessages.map((msg, idx) => <li key={idx}>{msg}</li>)}
      </ul>
    </div>
  );
};

const PersonalInfo = withRouter(
  connect(mapStateToProps)(connectedPersonalInfo)
);

export default PersonalInfo;
