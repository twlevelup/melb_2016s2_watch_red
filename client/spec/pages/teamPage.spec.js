'use strict';

var TeamPage = require('../../src/js/pages/teamPage'),
  page;

describe('Check-in dance', function() {

  beforeEach(function() {
    page = new TeamPage();
    page.render();
  });

  describe('initial git commit', function() {

    it('should include the text "Made by:"', function() {
      expect(page.$el).toContainText('Made by:');
    });

    it('should include the text Sami', function() {
      expect(page.$el).toContainText('Sami');
    });

  });
});
