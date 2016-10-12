// getDay
//separate functions to + and - values

'use strict';
var today = new Date();
var month = today.getMonth();
var monthName;

switch (month) {
  case 1:
    monthName="JAN";
    break;
  case 2:
    monthName="FEB";
    break;
  case 3:
    monthName="MAR";
    break;
  case 4:
    monthName="APR";
    break;
  case 5:
    monthName="MAY";
    break;
  case 6:
    monthName="JUN";
    break;
  case 7:
    monthName="JUL";
    break;
  case 8:
    monthName="AUG";
    break;
  case 9:
    monthName="SEP";
    break;
  case 10:
    monthName="OCT";
    break;
  case 11:
    monthName="NOV";
    break;
  case 12:
    monthName="DEC";
    break;

}


if (month == 9)
{
  monthName = "SEP";
}
else{
  monthName = "TEMP"
}

var Page = require('watch_framework').Page;

var monthPage = Page.extend({

  id: 'monthPage',

  template: require('../../templates/pages/monthPage.hbs'),

  buttonEvents: {
    // right: 'goToContacts',
    top: 'incrementMonth',
    bottom: 'decrementMonth',
    // left: 'goToMyDemoPage',
    // face: 'goToMenuPage'
  },

  // goToContacts: function() {
  //   window.App.navigate('contacts');
  // },
  getDay: function(){
    return monthName;
  },

  incrementMonth: function() {
    if(month == 12){
      month = 1;
    }
    else{
      day+=1;
    }
    this.render();
  },

  decrementMonth: function() {
    if(month==1){
      month = 12;
    }
    else{
      month-=1;
    }
    this.render();
  },

  // scrollDown: function() {
  //   $('#watch-face').animate({scrollTop: '+=70px'});
  // },

//'printing' html from hbs page
  render: function() {
    this.$el.html(this.template({monthName: monthName}));
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

module.exports = monthPage;
