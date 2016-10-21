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
    top: 'incrementFunction',
    bottom: 'decrementFunction',
    right: 'incrementSelected',
    left: 'decrementSelected'
  },

  incrementFunction: function(){
   if (selected == 1) this.incrementDay();
   if (selected == 2) this.incrementMonth();
   if (selected == 3) this.incrementYear();
   localStorage.setItem("day", day);
   localStorage.setItem("monthName", monthName[month]);
   localStorage.setItem("year", year+1900);

  },

  decrementFunction: function(){
   if (selected == 1) this.decrementDay();
   if (selected == 2) this.decrementMonth();
   if (selected == 3) this.decrementYear();
   localStorage.setItem("day", day);
   localStorage.setItem("monthName", monthName[month]);
   localStorage.setItem("year", year+1900);
  },

  incrementSelected: function(){
    selected+=1;
    if(selected==4) {
      this.getNextPage();
    };
    this.render();
  },

  decrementSelected: function(){
    selected-=1;
    if(selected==0) {
      this.getPrevPage();
    }
    this.render();
  },

  getPrevPage: function() {
    window.App.navigate('home');
  },

  getNextPage: function() {
    window.App.navigate('appointments');
  },

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
      if (month == 11) {
        month = 0;
      }
      else {
        month += 1;
      }

      this.render();
    },

    decrementMonth: function() {
      if (month == 0) {
        month = 11;
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
      if(year== today.getYear()){
        year = 8099;
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
      monthName: monthName[month],
      year: year+1900,
      selected: selected
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
