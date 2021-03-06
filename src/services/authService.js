import http from './httpService';
import jwtDecode from 'jwt-decode';
import config from '../config/config';

const authEndPoint = '/auth';

//http.setJwt(getJwt());

export async function login(email, password, resource, cookies) {
  const response = await http.post(`${config.serverUrl}${authEndPoint}`, {
    email,
    password,
    resource
  });
  console.log('POST:', response);
  //localStorage.setItem('token', jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem('token', jwt);
}

export function logout() {
  localStorage.removeItem('token');
}

export function getJwt() {
  return localStorage.getItem('token');
}

export function getCurrentUser() {
  //wrapping in try-catch block in case we dont have any jwt in localSorage
  try {
    const jwt = localStorage.getItem('token');
    return jwtDecode(jwt); //return "user"
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
};
