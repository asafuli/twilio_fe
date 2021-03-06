import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import auth from '../services/authService';
import logger from '../services/loggerService';
import { toggleUserLogin } from './../redux/actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';

const mapStateToProps = ({ userReducer: resource }) => resource;
const MapDispatchToProps = dispatch => {
  return {
    toggleUserLogin: () => dispatch(toggleUserLogin())
  };
};

class connectedLoginForm extends Form {
  state = {
    /*Note: For controlled elements - we have to initialize the state with some value 
   (null or undefined are considrered by React as uncontrolloed elements)
  */
    data: { username: '', password: '' },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label('Username'),
    password: Joi.string()
      .required()
      .label('Password')
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password, this.props.resource);

      /* commenting the below and instead calling window.location 
         to perform a full reload of the App after login in order
         to call 'componentDidMount again in App.js'  
        this.props.history.push('/');
      */
      this.props.toggleUserLogin();
      this.props.history.push('/home');

      //console.log(this.props.allCookies);
      //window.location = state ? state.from.pathname : '/home';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
        console.log(errors);
        logger.log(errors);
      }
    }
  };
  render() {
    return (
      <div className='login-form'>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </div>
    );
  }
}

const LoginForm = withRouter(
  connect(
    mapStateToProps,
    MapDispatchToProps
  )(connectedLoginForm)
);

export default LoginForm;
//export default withCookies(LoginForm);
