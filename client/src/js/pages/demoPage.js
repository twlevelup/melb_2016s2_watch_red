'use strict';

var Page = require('watch_framework').Page;
var demoPage = Page.extend({

    id: 'demo',

    template: require('../../templates/pages/demo.hbs'),

    render: function() {
      this.$el.html(this.template({name: 'John Smith'}));
      return this;
    }
  });

module.exports = demoPage;
