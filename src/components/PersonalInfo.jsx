import React, { useState, useEffect, useReducer } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import io from 'socket.io-client';
import config from '../config/config';
import { sendChatMsg, getChatHistory } from '../services/chatService';

const mapStateToProps = ({
  loginReducer: { loggedIn },
  userReducer: { user, resource }
}) => ({
  loggedIn,
  user,
  resource
});

const socket = io(config.serverUrl, { transports: ['websocket'] });

function messagesReducer(state = { messages: [] }, action) {
  const { messages } = state;
  const { payload } = action;
  if (action.type === 'updateChatMessagesDb') {
    return { messages: payload };
  } else if (action.type === 'addNewChatMessage') {
    return { messages: [...messages, payload] };
  } else {
    throw new Error();
  }
}

const connectedPersonalInfo = props => {
  const [state, dispatch] = useReducer(messagesReducer, { messages: [] });
  const [currentMessage, setCurrentMessage] = useState('');
  const { resource, user, loggedIn } = props;

  useEffect(() => {
    async function fetchChatHistory() {
      return await getChatHistory(props.uid);
    }
    if (state.messages.length === 0) {
      fetchChatHistory()
        .then(messagesDb => {
          console.log('useEffect - Initial - Returned :', messagesDb);
          dispatch({ type: 'updateChatMessagesDb', payload: messagesDb });
        })
        .catch(err => {
          console.log('useEffect - Initial - rejected :', err);
        });
    }

    socket.on('chat message', ([resource, user, message]) => {
      console.log('dispatching new message: ', resource, user, message);
      dispatch({
        type: 'addNewChatMessage',
        payload: { resource, user, message }
      });
    });
    return () => socket.disconnect();
  }, [props.uid]);

  const handleSubmit = async e => {
    e.preventDefault();
    socket.emit('chat message', [resource, user, currentMessage]);
    setCurrentMessage('');
    // Sync DB
    try {
      await sendChatMsg(props.resource, props.user, currentMessage);
    } catch (e) {
      dispatch({ type: 'updateChatMessagesDb', payload: state.messages });
      throw new Error('Failed to sendChatMsg to DB - reverting UI based on DB');
    }
  };

  const handleChange = e => {
    setCurrentMessage(e.target.value);
  };

  //state.messages.map(msg => console.log(msg));

  return false ? (
    <h1 className='chat-login'>Please login and start chatting!</h1>
  ) : (
    <div className='chat-wrapper'>
      <p className='chat-uid'>{props.uid}</p>
      <div className='chat-box'>
        <h3 className='chat-header'>Lets chat!</h3>
        <ul className='chat-msg-list'>
          {state.messages.length > 0 &&
            state.messages.map((msg, idx) => (
              <li className='chat-msg-list-item' key={idx}>
                <div className='chat-username'>
                  {msg.user}:
                  <span className='chat-msg-text'> {msg.message}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <form className='chat-form' onSubmit={e => handleSubmit(e)}>
        <input
          className='chat-type-msg'
          type='text'
          value={currentMessage}
          onChange={e => handleChange(e)}
        />
        <input className='chat-submit-msg' type='submit' value='Send' />
      </form>
    </div>
  );
};

const PersonalInfo = withRouter(
  connect(mapStateToProps)(connectedPersonalInfo)
);

export default PersonalInfo;
