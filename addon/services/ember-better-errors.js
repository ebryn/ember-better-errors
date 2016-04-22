import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);

    let originalOnError = this._originalOnError = Ember.onerror;

    Error.stackTraceLimit = 100;

    Ember.onerror = (error/*, errorRecordedForStack */) => {
      let html = `
        <h1>Ember.js runtime error</h1>
        <pre>${error.stack}</pre>
      `;

      Ember.$('body').html(html);

      if (originalOnError) { originalOnError(...arguments); }
    };
  },

  willDestroy() {
    Ember.onerror = this._originalOnError;
  }
});
