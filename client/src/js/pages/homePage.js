'use strict';

var Page = require('watch_framework').Page;

var homePage = Page.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: 'goToContacts',
    top: 'scrollUp',
    bottom: 'scrollDown',
    left: 'goToMyDemoPage',
    face: 'goToAppointments'
  },

  goToContacts: function() {
    window.App.navigate('contacts');
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  goToAppointments: function() {
    window.App.navigate('appointments');
  },

  goToMyDemoPage: function() {
    window.App.navigate('demo');
  }

});

module.exports = homePage;
