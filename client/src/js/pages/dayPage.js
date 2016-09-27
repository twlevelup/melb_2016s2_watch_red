// getDay
//separate functions to + and - values

'use strict';
var today = new Date();
var day = today.getDate();

var Page = require('watch_framework').Page;

var dayPage = Page.extend({

  id: 'dayPage',

  template: require('../../templates/pages/dayPage.hbs'),

  buttonEvents: {
    // right: 'goToContacts',
    top: 'incrementDay',
    // bottom: 'scrollDown',
    // left: 'goToMyDemoPage',
    // face: 'goToMenuPage'
  },

  // goToContacts: function() {
  //   window.App.navigate('contacts');
  // },
  getDay: function(){
    return day;
  },

  incrementDay: function() {
    day+=1;
  },

  // scrollDown: function() {
  //   $('#watch-face').animate({scrollTop: '+=70px'});
  // },

//'printing' html from hbs page
  render: function() {
    this.$el.html(this.template());
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
