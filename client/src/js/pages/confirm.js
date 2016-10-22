'use strict';

var Page = require('watch_framework').Page;


var confirm = Page.extend({

  id: 'alarm',

  template: require('../../templates/pages/confirm.hbs'),

  buttonEvents: {
    
  },



  render: function() {
    this.$el.html(this.template(
    ));
    return this;
  },


});

module.exports = confirm;
