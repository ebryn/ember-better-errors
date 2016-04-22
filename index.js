/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-better-errors',

  treeFor: function() {
    if (process.env.EMBER_ENV === 'development') {
      return this._super.treeFor.apply(this, arguments);
    }
  }
};
