import React, { Component } from 'react';
import Advice from './components/advice';
import Flight from './components/flight';
import NavBar from './components/navbar';
import Map from './components/map';
import PersonalInfo from './components/PersonalInfo';
import styledAccomodation from './components/accomodation';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateNavClass } from './redux/actions/index';

function MapDispatchToProps(dispatch) {
  return {
    updateNavClass: () => dispatch(updateNavClass())
  };
}

class ConnectedApp extends Component {
  componentDidMount = () => {
    const pathArray = window.location.pathname.split('/');
    this.setState({ uid: pathArray[2] });

    window.addEventListener('scroll', this.props.updateNavClass);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.updateNavClass);
  }

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

const App = connect(
  null,
  MapDispatchToProps
)(ConnectedApp);

export default App;
