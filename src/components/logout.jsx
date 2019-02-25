import React from 'react';
import { connect } from 'react-redux';
import { toggleUserLogin } from '../redux/actions/index';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  toggleUserLogin: () => dispatch(toggleUserLogin())
});

const connectedLogout = props => {
  props.toggleUserLogin();
  props.history.replace('/home');
  return null;
};

const Logout = withRouter(
  connect(
    null,
    mapDispatchToProps
  )(connectedLogout)
);

export default Logout;
