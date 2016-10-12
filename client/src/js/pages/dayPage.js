// getDay
//separate functions to + and - values

'use strict';

//get today's date/month/year
var today = new Date();
var day = today.getDate();
var month = today.getMonth();
var year = today.getYear();
var  monthName = ['JAN',
 'FEB',
 'MAR',
 'APR',
 'MAY',
 'JUN',
 'JUL',
 'AUG',
 'SEP',
 'OCT',
 'NOV',
 'DEC'];

// selected is a control index
// selected is a switch for day, month and year
var selected = 1;
var controls = new Array(5);
controls[1] = {
  top: 'incrementDay',
  bottom: 'decrementDay',
};
controls[2] = {
  top: 'incrementMonth',
  bottom: 'decrementMonth',
};
controls[3] = {
  top: 'incrementYear',
  bottom: 'decrementYear',
};

var Page = require('watch_framework').Page;

var dayPage = Page.extend({

  id: 'dayPage',

  template: require('../../templates/pages/dayPage.hbs'),

  buttonEvents: {
    // right: 'goToContacts',
    top: controls[selected].top,
    bottom: controls[selected].bottom,
    left: selected--,
    right: selected++
  },

  // goToContacts: function() {
  //   window.App.navigate('contacts');
  // },
  // getDay: function(){
  //   return day;
  // },

  incrementDay: function() {
    if(day == 31){
      day = 1;
    }
    else{
      day+=1;
    }
    this.render();
  },

  decrementDay: function() {
    if(day==1){
      day = 31;
    }
    else{
      day-=1;
    }
    this.render();
  },

    // goToContacts: function() {
    //   window.App.navigate('contacts');
    // // },
    // getDay: function() {
    //   return monthName;
    // },

    incrementMonth: function() {
      if (month == 12) {
        month = 1;
      }
      else {
        day += 1;
      }

      this.render();
    },

    decrementMonth: function() {
      if (month == 1) {
        month = 12;
      }
      else {
        month -= 1;
      }

      this.render();
    },

    incrementYear: function() {
      if(year == 9999){
        year = today.getYear();
      }
      else{
        year+=1;
      }
      this.render();
    },

    decrementYear: function() {
      if(year==1){
        year = 31;
      }
      else{
        year-=1;
      }
      this.render();
    },

  // scrollDown: function() {
  //   $('#watch-face').animate({scrollTop: '+=70px'});
  // },

//'printing' html from hbs page
  render: function() {
    this.$el.html(this.template({
      day: day,
      monthName: monthName[month]
    }));
    //this.$el.html(this.template({month: month}));
    return this;
  },

  // goToMenuPage: function() {
  //   window.App.navigate('menu');
  // },
  //
  // goToMyDemoPage: function() {
  //   window.App.navigate('demo');
  // }

});

module.exports = dayPage;
