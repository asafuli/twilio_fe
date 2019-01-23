import React, { Component } from 'react';
import Advice from './components/advice';
import Flight from './components/flight';
import NavBar from './components/navbar';
import Map from './components/map';
import PersonalInfo from './components/PersonalInfo';
import styledAccomodation from './components/accomodation';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateNavClass, updateUID } from './redux/actions/index';

function mapStateToProps({ UIDReducer: { uid } }) {
  return { uid };
}

function MapDispatchToProps(dispatch) {
  return {
    updateNavClass: () => dispatch(updateNavClass()),
    updateUID: uid => dispatch(updateUID(uid))
  };
}

class ConnectedApp extends Component {
  componentDidMount = () => {
    const pathArray = window.location.pathname.split('/');
    this.props.updateUID(pathArray[2]);
    //this.setState({ uid: pathArray[2] });

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
              render={props => <Advice {...props} uid={this.props.uid} />}
            />
            <Route
              exact
              path='/myList'
              render={props => <PersonalInfo {...props} uid={this.props.uid} />}
            />
          </Switch>
        </header>
      </div>
    );
  }
}

const App = withRouter(
  connect(
    mapStateToProps,
    MapDispatchToProps
  )(ConnectedApp)
);

export default App;
