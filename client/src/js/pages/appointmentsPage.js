'use strict';

var Page = require('watch_framework').Page;
var appointmentsPage = Page.extend({

    id: 'appointments',

    template: require('../../templates/pages/appointments.hbs'),

    buttonEvents: {
      face: 'back'
    },

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    }

  });

module.exports = appointmentsPage;
