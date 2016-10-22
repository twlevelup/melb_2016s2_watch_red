'use strict';

var Page = require('watch_framework').Page;

var day = localStorage.getItem("day");
var monthName = localStorage.getItem("monthName");
var year = localStorage.getItem("year");
// var hour = localStorage.getItem("hour");
// var minute = localStorage.getItem("minute");

var alarmPage = Page.extend({

  id: 'alarm',

  template: require('../../templates/pages/alarmPage.hbs'),

  buttonEvents: {
    // right: 'goToContacts',
    // top: 'scrollUp',
    // bottom: 'scrollDown',
    // left: 'goToMyDemoPage',
    // face: 'goToAppointments'
  },

  render: function() {
    this.$el.html(this.template({
      day: day,
      monthName: monthName,
      year: year,
      // hour: hour,
      // minute: minute
    }));
    return this;
  },


});

module.exports = alarmPage;
