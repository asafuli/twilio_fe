import React, { Component } from 'react';
import http from '../services/httpService';
import config from '../services/config';

class Advice extends Component {
  state = {
    advice: [],
    user: '',
    resource: '',
    message: ''
  };

  async componentDidMount() {
    const res = await http.get(config.serverUrl);
    console.log(res.data);
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
        <span>
          Thanks for your message from {resource}, you asked: "{message}"{' '}
        </span>
        <h1 className='advice'>
          Our Advice to you is:
          {advice.map((el, i) => (
            <p key={i}>{el}</p>
          ))}
        </h1>
      </div>
    );
  }
}
export default Advice;
