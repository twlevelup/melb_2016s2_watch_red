'use strict';

var Page = require('watch_framework').Page;
var timePage = Page.extend({

  id: 'time',

  template: require('../../templates/pages/time.hbs'),

  initialize: function() {
    this.render();
    this.ampm = [];
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = timePage;

