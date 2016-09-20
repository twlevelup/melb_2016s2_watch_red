'use strict';

var DemoPage = require('../../src/js/pages/demoPage'),
    page;

describe('The Demo Page', function() {

    beforeEach(function() {
        page = new DemoPage();
      });

    describe('rendering', function() {
        it('should produce the correct HTML', function() {
            page.render();
            expect(page.$el).toContainText('This is a demo');
            expect(page.$el).toContainHtml('<p>What a great page!</p>');
          });
      });

    it('should pass a variable to the template', function() {

      page.render();
      expect(page.$el).toContainHtml('<h2>Welcome, John Smith!</h2>');

    });

  });
