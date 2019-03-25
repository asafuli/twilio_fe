import Raven from 'raven-js';

function init() {
  Raven.config(
    'https://e7edc9ef81d74e259f2bf0082e026fa6@sentry.io/1389031'
  ).install();
}

function log(error) {
  console.log('calling raven with error: ', error);
  Raven.captureException(error);
}

export default {
  init,
  log
};
