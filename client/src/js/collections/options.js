'use strict';

var Option = require('../models/option');

var Options = Backbone.Collection.extend({
  model: Option
});

module.exports = Options;