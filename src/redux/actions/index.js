import { TOGGLE_MESSAGES } from '../constants/action-types';
import { TOGGLE_NAVBAR } from '../constants/action-types';
import { UPDATE_NAV_CLASS } from '../constants/action-types';

export function toggleMessages(payload) {
  return { type: TOGGLE_MESSAGES, payload };
}

export function toggleNavbar(payload) {
  return { type: TOGGLE_NAVBAR, payload };
}

export function updateNavClass(payload) {
  return { type: UPDATE_NAV_CLASS, payload };
}
