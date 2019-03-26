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
    console.log(
      'messageReducer - updateChatMessagesDb - State : ',
      state,
      action
    );
    return { messages: payload };
  } else if (action.type === 'addNewChatMessage') {
    console.log('messageReducer - addNewChatMessage - State : ', state, action);
    return { messages: [...messages, payload] };
  } else {
    throw new Error();
  }
}

const connectedPersonalInfo = props => {
  //const [chatMessages, setChatMessages] = useState([]);
  const [state, dispatch] = useReducer(messagesReducer, { messages: [] });
  const [currentMessage, setCurrentMessage] = useState('');
  //const latestChatMessages = useRef(chatMessages);

  useEffect(() => {
    async function fetchChatHistory() {
      return await getChatHistory(props.uid);
    }
    console.log('useEffect - chatMessages :', state.messages);
    if (state.messages.length === 0) {
      fetchChatHistory()
        .then(messagesDb => {
          console.log('useEffect - Initial - Returned :', messagesDb);
          // setChatMessages(messagesDb);
          dispatch({ type: 'updateChatMessagesDb', payload: messagesDb });
          console.log(
            'useEffect - Initial after dispath updateChatMessagesDb :',
            state.messages
          );
        })
        .catch(err => {
          console.log('useEffect - Initial - rejected :', err);
        });
    }

    socket.on('chat message', msg => {
      //setChatMessages([...chatMessages, msg]);
      dispatch({ type: 'addNewChatMessage', payload: msg });
      console.log(
        'UseEffect - Socket.on - after dipatch addNewChatMessage : ',
        state.messages
      );
    });
    return () => socket.disconnect();
  }, [props.uid]);

  const handleSubmit = async e => {
    e.preventDefault();
    socket.emit('chat message', currentMessage);
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
