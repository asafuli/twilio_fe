import React, { Component } from 'react';
import http from '../services/httpService';
import config from '../config/config';

class Advice extends Component {
  state = {
    advice: [],
    user: '',
    resource: '',
    message: []
  };

  async componentDidMount() {
    const uid = this.props.match.params.id;
    const res = await http.get(`${config.serverUrl}\\${uid}`);
    const { advice, user, resource, message } = res.data;
    this.setState({ advice, user, resource, message });
  }

  render() {
    const { advice, user, resource, message } = this.state;
    return advice.length === 0 ? (
      <h1>Loading...</h1>
    ) : (
      <div className='container'>
        <h1>Welcome {user}!</h1>
        <h2>
          Thanks for your message from {resource}, here is your messages
          history: "
          {message.map((msg, idx) => (
            <h1 key={idx}>{msg}</h1>
          ))}
          "{' '}
        </h2>
        <h1 className='advice'>
          Here's a free advice for now:
          {advice.map((el, i) => (
            <p key={i}>{el}</p>
          ))}
        </h1>
      </div>
    );
  }
}
export default Advice;
