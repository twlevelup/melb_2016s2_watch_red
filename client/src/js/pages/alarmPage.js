'use strict';

var Page = require('watch_framework').Page;



var alarmPage = Page.extend({

  id: 'alarm',

  template: require('../../templates/pages/alarmPage.hbs'),

  buttonEvents: {
    left: 'getPrevPage',
    right: 'getNextPage'
    // top: 'scrollUp',
    // bottom: 'scrollDown',
    // left: 'goToMyDemoPage',
    // face: 'goToAppointments'
  },



  render: function() {
    var day = localStorage.getItem("day");
    var monthName = localStorage.getItem("monthName");
    var year = localStorage.getItem("year");
    var hour = localStorage.getItem("hour");
    var min = localStorage.getItem("min");
    var ampm = localStorage.getItem("AMPM");
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
  },
  getPrevPage: function() {
    window.App.navigate('appointments');
  }

});

module.exports = alarmPage;
