'use strict';

var TimePage = require('../../src/js/pages/timePage'),
    App = require('../../src/js/app'), eventHub = require('watch_framework').EventHub,
  page;

window.App = App;

describe('The Time Page', function() {

  beforeEach(function() {
    page = new TimePage();
  });

  describe('rendering', function() {
    it('should produce the correct HTML', function() {
      page.render();
      expect(page.$el).toContainText('8:30PM');
    });
  });

  describe('menulist', function() {
    it('should have the ampm variable', function() {
      page.render();
      expect(page.ampm).toBeDefined();
    });
  });

});
