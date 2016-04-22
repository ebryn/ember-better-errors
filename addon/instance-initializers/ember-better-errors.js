export function initialize(appInstance) {
  // TODO: only activate if we're in dev mode
  appInstance.lookup('service:ember-better-errors');
}

export default {
  name: 'ember-better-errors',
  initialize
};
