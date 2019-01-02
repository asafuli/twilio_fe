import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Advice from './components/advice';
import Flight from './components/flight';
import NavBar from './components/navbar';
import Map from './components/map';
import { getCurrentUser } from './services/userService';

class App extends Component {
  state = {};

  // componentDidMount = () => {
  //   const uid = this.props.match.params.id;
  //   this.setState({ uid });
  // };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <NavBar />
          <Switch>
            <Route exact path='/user/:id' component={Advice} />
            <Route exact path='/flight' component={Flight} />
            <Route exact path='/accomodation' component={Flight} />
            <Route exact path='/map' component={Map} />
            <Route exact path='/info' component={Flight} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
