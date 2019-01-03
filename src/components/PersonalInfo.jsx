import React from 'react';

const PersonalInfo = ({ uid }) => {
  state = {
    advice: '',
    user: '',
    resource: '',
    message: [],
    showMessages: false,
    secondsToFlight: 0
  };

  async componentDidMount() {
    const uid = this.props.match.params.id;
    const userInfo = await getUserInfo(uid);
    this.setState(userInfo);
    const targetDate = new Date(2019, 4, 13, 12, 0, 0);
    setInterval(this.countdown, 1000, targetDate);
  }

  countdown = targetDate => {
    const currentDate = new Date();
    const secondsToFlight = Math.ceil(
      (targetDate.valueOf() - currentDate.valueOf()) / 1000
    );
    this.setState({ secondsToFlight });
  };

  toggleShowMsg = async () => {
    const uid = this.props.match.params.id;
    const userInfo = await getUserInfo(uid);
    this.setState({ ...userInfo, showMessages: !this.state.showMessages });
  };

  render() {
    const { advice, user, resource, message } = this.state;
    
      <div className='container'>  
         <ul>
          {message.map((msg, idx) => {
            if (msg.toLowerCase().includes('www')) {
              return (
                <div key={idx}>
                  <li>
                    <strong>
                      <a href={msg}>{msg}</a>
                    </strong>
                  </li>{' '}
                </div>
              );
            } else
              return (
                <div key={idx}>
                  <li>
                    <strong>{msg}</strong>
                  </li>{' '}
                </div>
              );
          })}
        </ul>
      </div>     
};

export default PersonalInfo;
