'use strict';

var dayPage = require('../../src/js/pages/dayPage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

window.App = App;

describe('The Day Page', function() {

  beforeEach(function() {
    page = new dayPage();
  });

  describe('top', function() {

    it('should increment day by 1', function() {
      page.configureButtons();
      eventHub.trigger('top');
      // console.log(page.getDay());
      var todayDate = new Date();
      expect(page.getDay()).toBe(todayDate.getDate() + 1);
    });
  });

  describe('bottom', function() {

    it('should decrement day by 1', function() {
      page.configureButtons();
      eventHub.trigger('bottom');
      // console.log(page.getDay());
      var todayDate = new Date();
      expect(page.getDay()).toBe(todayDate.getDate() - 1);
    });
  });

  describe('bottom', function() {

    it('should decrement day by 1', function() {
      page.configureButtons();
      eventHub.trigger('bottom');
      // console.log(page.getDay());
      var todayDate = new Date();
      expect(page.getDay()).toBe(todayDate.getDate() - 1);
    });
  });

  describe('bottom', function() {

    it('should decrement day by 1', function() {
      page.configureButtons();
      eventHub.trigger('bottom');
      // console.log(page.getDay());
      var todayDate = new Date();
      expect(page.getDay()).toBe(todayDate.getDate() - 1);
    });
  });
});
