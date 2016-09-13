'use strict';

var MenuPage = require('../../src/js/pages/menuPage'), App = require('../../src/js/app'), eventHub = require('watch_framework').EventHub,
  page;

window.App = App;

describe('The Menu Page', function() {

  beforeEach(function() {
    page = new MenuPage();
  });

  describe('menulist', function() {
    it('should contain 5 items', function() {
      page.render();
      expect(page.collection.length).toEqual(5);
    });
  });

  describe('rendering', function() {
    it('should produce the correct HTML', function() {
      page.render();
      expect(page.$el).toContainText('first option: up');
    });
  });

});
