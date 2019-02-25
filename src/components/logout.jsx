import { connect } from 'react-redux';
import { toggleUserLogin } from '../redux/actions/index';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  toggleUserLogin: () => dispatch(toggleUserLogin())
});

const connectedLogout = ({ toggleUserLogin }) => {
  toggleUserLogin();
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
