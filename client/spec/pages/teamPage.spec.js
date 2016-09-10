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

<<<<<<< HEAD
    it('should include the text Sami', function() {
      expect(page.$el).toContainText('Sami');
=======

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
>>>>>>> c0fb85be5843ce23a47f6c7eef8ea598d281d025
    });

  });
});
