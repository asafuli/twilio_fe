import http from './httpService';
import config from '../config/config';

export async function getUserInfo(uid) {
  const res = await http.get(`${config.serverUrl}\\user\\${uid}`, {
    params: {
      preventCache: new Date()
    }
  });
  const { advice, user, resource, message } = res.data;
  return { advice, user, resource, message };
}
