import http from './httpService';
import config from '../config/config';

export async function getChatHistory(uid) {
  const res = await http.get(`${config.serverUrl}\\chat\\${uid}`, {
    preventCache: new Date()
  });
  const data = res.data;
  console.log('getChatHistory: ', data);
  return data;
}

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
