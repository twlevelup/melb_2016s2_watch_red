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

  describe('left', function() {
        it('should take the user', function() {
          spyOn(page, 'back');
          page.configureButtons();
          eventHub.trigger('left');
          expect(page.back).toHaveBeenCalled();
        });
      });
    it('should take the user', function() {
      spyOn(page, 'back');
      page.configureButtons();
      eventHub.trigger('left');
      expect(page.back).toHaveBeenCalled();
    });
  });

  /*describe("Time", function() {
    it("Should return time, minutes and am/pm", function() {
      page.render();
      expect(page.$el).toContainText("12");

    }}
*/

  });
