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


    it('should include the text Quoc', function() {
      expect(page.$el).toContainText('Quoc');

    it('Should include Jessica', function() {
      expect(page.$el).toContainText('Jessica');
    });

    // TODO: Add a test to check for your name
    it('should include Rayen', function(){
      expect(page.$el).toContainText('Rayen');
    it('should include stacey', function() {
      expect(page.$el).toContainText('stacey');
    });

  });
});
