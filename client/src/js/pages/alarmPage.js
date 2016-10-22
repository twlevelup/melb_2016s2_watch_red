'use strict';

var Page = require('watch_framework').Page;

var day = localStorage.getItem("day");
var monthName = localStorage.getItem("monthName");
var year = localStorage.getItem("year");
var hour = localStorage.getItem("hour");
var min = localStorage.getItem("min");
var ampm = localStorage.getItem("AMPM");

var alarmPage = Page.extend({

  id: 'alarm',

  template: require('../../templates/pages/alarmPage.hbs'),

  buttonEvents: {
    right: 'getNextPage'
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
      hour: hour,
      min: min,
      ampm:ampm
    }));
    return this;
  },

  getNextPage: function(){
    window.App.navigate('confirm');
  }

});

module.exports = alarmPage;
