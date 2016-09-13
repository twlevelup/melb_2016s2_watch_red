'use strict';

var Option = Backbone.Model.extend({
  defaults: {
    direction: 'up',
    action: 'click'
  }
});

module.exports = Option;
