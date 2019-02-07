import axios from 'axios';
import { toast } from 'react-toastify';
import logger from './loggerService';

//axios.defaults.baseURL = config.serverUrl;

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error('An unexpected error has occurred');
  }

  //Promise.reject will return the promise with the error to the next try-catch phrase
  return Promise.reject(error);
});

export default {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete
};
