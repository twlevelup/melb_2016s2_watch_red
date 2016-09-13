'use strict';

var Menu = require('watch_framework').Menu;
var OptionsCollection = require('../collections/options');

var menuList;

var menuPage = Menu.extend({

  id: 'menu',

  template: require('../../templates/pages/menu.hbs'),

  initialize: function() {
    this.collection = new OptionsCollection;
  },

  render: function() {

    menuList = this.collection;
    menuList.add([
      {
        direction: "up",
        action: "first option"
      },
      {
        direction: "down",
        action: "second option"
      },
      {
        direction: "left",
        action: "third option"
      },
      {
        direction: "right",
        action: "fourth option"
      },
      {
        direction: "screen",
        action: "fifth option"
      }
    ]);

    var directions = menuList.pluck("direction");
    var actions = menuList.pluck("action");

    this.$el.html(this.template(
      {
        option1: actions[0],
        option2: actions[1],
        option3: actions[2],
        option4: actions[3],
        option5: actions[4],
        value1: directions[0],
        value2: directions[1],
        value3: directions[2],
        value4: directions[3],
        value5: directions[4]
      }
    ));

    return this;
  }
});

module.exports = menuPage;