'use strict';

var AppointmentsPage = require('../../src/js/pages/appointmentsPage'),
    App = require('../../src/js/app'), eventHub = require('watch_framework').EventHub,
  page;

window.App = App;

describe('The Appointments Page', function() {

  beforeEach(function() {
    page = new AppointmentsPage();
  });

  describe('rendering', function() {
    it('should produce the correct HTML', function() {
      page.render();
      expect(page.$el).toContainText('Hello World!');
    });
  });

});
