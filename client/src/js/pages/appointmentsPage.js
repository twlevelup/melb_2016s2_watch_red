'use strict';

var hour = 0;
var min = 0;
var amPm = 'AM';
var selected = 1;

var Page = require('watch_framework').Page;

var appointmentsPage = Page.extend({

  id: 'appointments',

  template: require('../../templates/pages/appointments.hbs'),

  buttonEvents: {
    top: 'incrementFunction',
    bottom: 'decrementFunction',
    right: 'incrementSelected',
    left: 'decrementSelected'
  },

  incrementFunction: function() {
    if (selected === 1) this.incrementHour();
    if (selected === 2) this.incrementMin();
    if (selected === 3) this.changeAMPM();
    localStorage.setItem('hour', hour);
    localStorage.setItem('min', min);
    localStorage.setItem('AMPM', amPm);
  },

  decrementFunction: function() {
    if (selected === 1) this.decrementHour();
    if (selected === 2) this.decrementMin();
    if (selected === 3) this.changeAMPM();
    localStorage.setItem('hour', hour);
    localStorage.setItem('min', min);
    localStorage.setItem('AMPM', amPm);
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template({
      hour: hour,
      min: min,
      amPm: amPm,
      selected: selected
    }));
    return this;
  },

  incrementSelected: function() {
    selected += 1;
    if (selected === 4) {
      this.getNextPage();
    }

    console.log('selected: ' + selected);
    this.render();
  },

  decrementSelected: function() {
    selected -= 1;
    if (selected === 0) {
      this.getPrevPage();
    }

    console.log('selected: ' + selected)
    this.render();
  },

  getNextPage: function() {
    window.App.navigate('alarm');
  },

  getPrevPage: function() {
    window.App.navigate('day');
  },

  incrementHour: function() {
    if (hour === 12) {
      hour = 0
      console.log('hour: ' + hour)
      this.render();
    }

    hour += 1
    console.log('hour: ' + hour)
    this.render();
  },

  decrementHour: function() {
    if (hour === 0) {
      hour = 12
      console.log('hour: ' + hour)
      this.render();
    }

    hour -= 1
    console.log('hour: ' + hour)
    this.render();
  },

  incrementMin: function() {
    if (min === 59) {
      min = 0
      this.render();
    }

    min += 1
    this.render();
  },

  decrementMin: function() {
    if (min === 0) {
      min = 59
      this.render();
    }

    min -= 1
    this.render();
  },

  changeAMPM: function() {
    if (amPm === 'AM') {
      amPm = 'PM'
      this.render();
    } else
      amPm = 'AM'
    this.render();
  }

});

module.exports = appointmentsPage;

