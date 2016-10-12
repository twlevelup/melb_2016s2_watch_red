'use strict';

var monthPage = require('../../src/js/pages/monthPage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

window.App = App;

describe('The Month Page', function() {

  beforeEach(function() {
    page = new monthPage();
  });

  describe('top', function() {

    it('should increment month by 1', function() {
      page.configureButtons();
      eventHub.trigger('top');
      // console.log(page.getDay());
      var todayDate = new Date();
      expect(page.getMonth()).toBe(todayDate.getMonth() + 1);
    });
  });

  describe('bottom', function() {

    it('should decrement month by 1', function() {
      page.configureButtons();
      eventHub.trigger('bottom');
      // console.log(page.getDay());
      var todayDate = new Date();
      expect(page.getMonth()).toBe(todayDate.getMonth() - 1);
    });
  });
});
