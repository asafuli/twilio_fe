import React, { Component } from 'react';
import Advice from './components/advice';
import Flight from './components/flight';
import NavBar from './components/navbar';
import Map from './components/map';
import PersonalInfo from './components/PersonalInfo';
import styledAccomodation from './components/accomodation';
import { getCurrentUser } from './services/userService';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  state = {};

  componentDidMount = () => {
    const pathArray = window.location.pathname.split('/');
    this.setState({ uid: pathArray[2] });
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <NavBar />
          <Switch>
            <Route exact path='/user/:id' component={Advice} />
            <Route exact path='/flight' component={Flight} />
            <Route exact path='/accomodation' component={styledAccomodation} />
            <Route exact path='/map' component={Map} />
            <Route exact path='/info' component={Flight} />
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
