import http from './httpService';
import config from '../config/config';

export async function getChatHistory(uid) {
  const res = await http.get(`${config.serverUrl}\\chat\\`, {
    preventCache: new Date()
  });
  const data = res.data;
  console.log('getChatHistory: ', data);
  return data;
}

export async function sendChatMsg(resource, user, message) {
  const res = await http.post(`${config.serverUrl}\\chat\\`, {
    timestamp: new Date(),
    resource,
    user,
    message
  });
  const data = res.data;
  console.log('sendChatMsg: ', data);
  return data.messages;
}
