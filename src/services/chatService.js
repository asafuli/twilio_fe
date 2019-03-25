import http from './httpService';
import config from '../config/config';

export async function sendChatMsg(resource, message) {
  const res = await http.post(`${config.serverUrl}\\chat\\`, {
    timestamp: new Date(),
    resource,
    message
  });
  const data = res.data;
  console.log('sendChatMsg: ', data);
  return data;
}
