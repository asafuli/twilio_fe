import { TOGGLE_MESSAGES } from '../constants/action-types';

export function toggleMessages(payload) {
  return { type: TOGGLE_MESSAGES, payload };
}
