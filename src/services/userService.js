import http from './httpService';

export async function getUserInfo(uid) {
  const res = await http.get(`${config.serverUrl}\\user\\${uid}`);
  const { advice, user, resource, message } = res.data;
  console.log(message);
  return { advice, user, resource, message };
}
