import React, { Component } from 'react';
import Advice from './components/advice';
import Flight from './components/flight';
import NavBar from './components/navbar';
import Map from './components/map';
import PersonalInfo from './components/PersonalInfo';
import styledAccomodation from './components/accomodation';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.hideNavOnScroll = this.hideNavOnScroll.bind(this);
  }

  hideNavOnScroll = e => {
    let { lastScrollTop = 0 } = this.state;
    let st = window.pageYOffset || document.documentElement.scrollTop;
    let newNavBarClass = '';

    if (st > lastScrollTop) {
      newNavBarClass = 'navbar-hidden';
    }

    lastScrollTop = st <= 0 ? 0 : st;
    this.setState({ navBarClass: newNavBarClass, lastScrollTop });
  };

  componentDidMount = () => {
    const pathArray = window.location.pathname.split('/');
    this.setState({ uid: pathArray[2] });

    window.addEventListener('scroll', this.hideNavOnScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideNavOnScroll);
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <NavBar navBarClass={this.state.navBarClass} />
          <Switch>
            <Route exact path='/user/:id' component={Advice} />
            <Route exact path='/flight' component={Flight} />
            <Route exact path='/accomodation' component={styledAccomodation} />
            <Route exact path='/map' component={Map} />
            <Route
              exact
              path='/home'
              render={props => <Advice {...props} uid={this.state.uid} />}
            />
            <Route
              exact
              path='/myList'
              render={props => <PersonalInfo {...props} uid={this.state.uid} />}
            />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
