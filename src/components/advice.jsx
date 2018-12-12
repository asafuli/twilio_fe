import React, { Component } from 'react';
import http from '../services/httpService';
import config from '../config/config';

class Advice extends Component {
  state = {
    advice: '',
    user: '',
    resource: '',
    message: [],
    showMessages: false,
    secondsToFlight: 0
  };

  async componentDidMount() {
    this.getMessages();
    const targetDate = new Date(2019, 4, 13, 12, 0, 0);
    setInterval(this.countdown, 1000, targetDate);
  }

  getMessages = async () => {
    const uid = this.props.match.params.id;
    const res = await http.get(`${config.serverUrl}\\user\\${uid}`);
    const { advice, user, resource, message } = res.data;
    console.log(message);
    this.setState({ advice, user, resource, message });
  };

  countdown = targetDate => {
    const currentDate = new Date();
    const secondsToFlight = Math.ceil(
      (targetDate.valueOf() - currentDate.valueOf()) / 1000
    );
    this.setState({ secondsToFlight });
  };

  toggleShowMsg = () => {
    this.getMessages();
    this.setState({ showMessages: !this.state.showMessages });
  };

  render() {
    const { advice, user, resource, message } = this.state;
    return advice.length === 0 ? (
      <h1>Loading...</h1>
    ) : (
      <div className='container'>
        <header id='header'>
          <div className='logo'>
            <h2>Welcome {user}!</h2>
          </div>
        </header>
        <section id='main'>
          <div className='inner'>
            <section id='one' className='wrapper style1'>
              <div className='image fit flush'>
                <img src='../images/pic02.jpg' alt='' />
              </div>
              <header className='special'>
                <h1>
                  {' '}
                  Only {this.state.secondsToFlight} seconds left until your
                  Black forest experience...
                </h1>
                <h1>
                  {' '}
                  click below to checkout you messages history from #
                  {resource.replace('whatsapp:+972', '0')}{' '}
                </h1>
                <button type='submit' onClick={this.toggleShowMsg}>
                  clickMe
                </button>
              </header>
              {this.state.showMessages ? (
                <div className='content'>
                  <ul>
                    {message.map((msg, idx) => (
                      <div key={idx}>
                        <li>
                          <strong>{msg}</strong>
                        </li>{' '}
                      </div>
                    ))}
                  </ul>
                </div>
              ) : (
                <div />
              )}
            </section>
            <section id='two' className='wrapper style2'>
              <header>
                <h2>Here's a free advice for now:</h2>
                <p>{advice}</p>
              </header>
              <div className='content'>
                <div className='gallery'>
                  <div>
                    <div className='image fit flush'>
                      <a href='../images/pic03.jpg'>
                        <img src='../images/pic03.jpg' alt='' />
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className='image fit flush'>
                      <a href='../images/pic01.jpg'>
                        <img src='../images/pic01.jpg' alt='' />
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className='image fit flush'>
                      <a href='../images/pic04.jpg'>
                        <img src='../images/pic04.jpg' alt='' />
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className='image fit flush'>
                      <a href='../images/pic05.jpg'>
                        <img src='../images/pic05.jpg' alt='' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id='three' className='wrapper'>
              <div className='spotlight'>
                <div className='image flush'>
                  <img src='../images/pic06.jpg' alt='' />
                </div>
                <div className='inner'>
                  <h3>Viverra Hendrerit</h3>
                  <p>
                    Curabitur eget semper ante. Morbi eleifend ultricies est, a
                    blandit diam vehicula vel. Vestibulum porttitor nisi quis
                    viverra hendrerit. Suspendisse vel volutpat nibh, vel
                    elementum lacus. Maecenas commodo pulvinar dui, at cursus
                    metus imperdiet vel.
                  </p>
                </div>
              </div>
              <div className='spotlight alt'>
                <div className='image flush'>
                  <img src='../images/pic07.jpg' alt='' />
                </div>
                <div className='inner'>
                  <h3>Curabitur Eget</h3>
                  <p>
                    Curabitur eget semper ante. Morbi eleifend ultricies est, a
                    blandit diam vehicula vel. Vestibulum porttitor nisi quis
                    viverra hendrerit. Suspendisse vel volutpat nibh, vel
                    elementum lacus. Maecenas commodo pulvinar dui, at cursus
                    metus imperdiet vel.
                  </p>
                </div>
              </div>
              <div className='spotlight'>
                <div className='image flush'>
                  <img src='../images/pic08.jpg' alt='' />
                </div>
                <div className='inner'>
                  <h3>Morbi Eleifend</h3>
                  <p>
                    Curabitur eget semper ante. Morbi eleifend ultricies est, a
                    blandit diam vehicula vel. Vestibulum porttitor nisi quis
                    viverra hendrerit. Suspendisse vel volutpat nibh, vel
                    elementum lacus. Maecenas commodo pulvinar dui, at cursus
                    metus imperdiet vel.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>

        <footer id='footer'>
          <div className='container'>
            <ul className='icons'>
              <li>
                <a href='#' className='icon fa-twitter'>
                  <span className='label'>Twitter</span>
                </a>
              </li>
              <li>
                <a href='#' className='icon fa-facebook'>
                  <span className='label'>Facebook</span>
                </a>
              </li>
              <li>
                <a href='#' className='icon fa-instagram'>
                  <span className='label'>Instagram</span>
                </a>
              </li>
              <li>
                <a href='#' className='icon fa-envelope-o'>
                  <span className='label'>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}
export default Advice;
