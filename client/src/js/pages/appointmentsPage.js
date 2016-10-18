'use strict';

var hour = 0;
var min = 0;
var amPm = "AM";
var selected = 1;
var controls = [
  {
    top: "incrementHour",
    bottom: "decrementHour"
  },
  {
    top: "incrementMin",
    bottom: "decrementMin"
  },
  {
    top: "changeAMPM",
    bottom: "changeAMPM"
  }
];

var Page = require('watch_framework').Page;

var appointmentsPage = Page.extend({

  id: 'appointments',

  template: require('../../templates/pages/appointments.hbs'),

  buttonEvents: {
    top: controls[selected-1].top,
    bottom: controls[selected-1].bottom,
    right: "incrementSelected",
    left: "decrementSelected"
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template({
      hour: hour,
      min: min,
      amPm: amPm
    }));
    return this;
  },

  incrementSelected: function() {
    selected += 1;
    console.log(controls[selected-1])
    if (selected === 4) {
      getNextPage();
    }
    console.log("selected: " + selected);
    this.render();
  },

  decrementSelected: function() {
    selected -= 1;
    if (selected === 0){
      getPrevPage();
    }
    console.log("selected: " + selected)
    this.render();
  },

  incrementHour: function() {
    if (hour === 12) {
      hour = 0
      console.log("hour: " + hour)
      this.render();
    }
    hour += 1
      console.log("hour: " + hour)
    this.render();
  },

  decrementHour: function() {
    if (hour === 0) {
      hour = 12
      console.log("hour: " + hour)
      this.render();
    } 
    hour -= 1
    console.log("hour: " + hour)
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
    if (amPm === "AM") {
      amPm = "PM"
      this.render();
    }
    amPM = "AM"
    this.render();
  }


});

module.exports = appointmentsPage;


