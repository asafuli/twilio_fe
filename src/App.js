import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Advice from './components/advice';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Switch>
            <Route exact path='/user/:id' component={Advice} />
            <Route exact path='/flight' component={Flight} />
            <Route exact path='/accomodation' component={Flight} />
            <Route exact path='/map' component={Flight} />
            <Route exact path='/info' component={Flight} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
