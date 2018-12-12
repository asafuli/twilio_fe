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
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
