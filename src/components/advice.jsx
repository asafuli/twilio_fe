import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  toggleMessages,
  updateUserInfo,
  updateTimer
} from './../redux/actions/index';
import { withRouter } from 'react-router-dom';

const MapStateToProps = ({
  userReducer: { message, resource, user, advice },
  adviceReducer: { showMessages },
  timerReducer: { timer }
}) => {
  return { timer, showMessages, message, resource, user, advice };
};

function MapDispatchToProps(dispatch, ownProps) {
  return {
    toggleMessages: () => dispatch(toggleMessages(ownProps)),
    updateUserInfo: () => dispatch(updateUserInfo(ownProps)),
    updateTimer: timer => dispatch(updateTimer(timer))
  };
}

class connectedAdvice extends Component {
  async componentDidMount() {
    this.props.updateUserInfo();
    const targetDate = new Date(2019, 4, 13, 12, 0, 0);
    this.secondsTimer = setInterval(this.countdown, 1000, targetDate);
  }

  componentWillUnmount() {
    clearInterval(this.secondsTimer);
  }

  countdown = targetDate => {
    const currentDate = new Date();
    const timer = Math.ceil(
      (targetDate.valueOf() - currentDate.valueOf()) / 1000
    );
    this.props.updateTimer(timer);
  };

  render() {
    const { timer, advice, user, resource, message } = this.props;
    return advice && advice.length === 0 ? (
      <h1>Loading...</h1>
    ) : (
      <div className='container'>
        <header id='header'>
          <div className='logo'>
            <h1 className='animated'>Welcome {user}!</h1>
          </div>
        </header>
        <section id='main'>
          <div className='inner'>
            <section id='one' className='wrapper style1'>
              <div className='image fit flush'>
                <img src='../images/pic02.jpg' alt='' />
              </div>
              <header className='special'>
                <h1 className='timer-title'>
                  {' '}
                  Only <span className='animated-timer'>{timer}</span> seconds
                  left until your Black forest experience...
                </h1>
                <button type='submit' onClick={this.props.toggleMessages}>
                  {this.props.showMessages ? 'Hide' : 'Show'} Message History
                </button>
              </header>
              {this.props.showMessages ? (
                <div className='content'>
                  <ul className='msg-history'>
                    {message.map((msg, idx) => {
                      if (msg.toLowerCase().includes('www.')) {
                        return (
                          <div key={idx}>
                            <li>
                              <strong>
                                <a
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  href={`http://${msg}`}
                                >
                                  {msg}
                                </a>
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
                  <h3>היער השחור גרמניה</h3>

                  <p>
                    קודם כל – מידע מדויק, ברור ושאינו מוטה, שיעזור לכם לתכנן
                    טיול בעצמכם ליער השחור. למשל: טיפים על מתי להגיע ולאן לטוס,
                    איפה כדאי ללון? מפת הכפרים והאטרקציות, המלצות על טיול עם
                    ילדים, מידע על מזג האוויר, מידע על כרטיסי הטבות של היער
                    השחור, סיפורים ומסלולי טיול של מטיילים כמוכם, מדריכים גדולים
                    על קניות, על ניווט וטלפון, על כשרות, על בניית מסלולי טיול,
                    המלצות שונות ועוד...
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://www.xn--6dbdabdlme8buq6edbk.com/'
                    >
                      קרא עוד
                    </a>
                  </p>
                </div>
              </div>
              <div className='spotlight alt'>
                <div className='image flush'>
                  <img src='../images/pic07.jpg' alt='' />
                </div>
                <div className='inner'>
                  <h3>היער השחור - למטייל</h3>
                  <p>
                    היער השחור (Black Forest) או כפי שהוא נקרא בגרמנית
                    ה-Schwarzwald, הוא אחד מיעדי התיירות המובילים של גרמניה
                    וכדאי אף לשלב אותו בטיול במדינות שוויץ, אוסטריה או צרפת.
                    עיקר העניין באזור זה, כמתבקש משמו, הוא הטבע והנופים. היער
                    השחור הוא אחד היערות המרתקים, הצבעונים והמגוונים ביותר
                    בעולם. הטיול ברחבי היער השחור יזמן לכם מפגש עם ערים וכפרים
                    ציוריים, תושבים חברותיים, פולקלור, אגמים ובעיקר שעוני
                    קוקיה...
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://www.lametayel.co.il/%D7%99%D7%A2%D7%A8+%D7%94%D7%A9%D7%97%D7%95%D7%A8'
                    >
                      קרא עוד
                    </a>
                  </p>
                </div>
              </div>
              <div className='spotlight'>
                <div className='image flush'>
                  <img src='../images/pic08.jpg' alt='' />
                </div>
                <div className='inner'>
                  <h3> Go Travel - היער השחור </h3>
                  <p>
                    היער השחור בדרום-מערב גרמניה, מיעדי התיירות המובילים
                    באירופה, מוצף תיירים וגם לא מעט מלכודות תיירים. מומלץ לתכנן
                    את הביקור ביער השחור הרחק מהמוני התיירים , בטיול אקטיבי
                    וחוויתי...
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://www.gotravel.co.il/travel/?p=2599'
                    >
                      קרא עוד
                    </a>
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

const Advice = withRouter(
  connect(
    MapStateToProps,
    MapDispatchToProps
  )(connectedAdvice)
);

export default Advice;
