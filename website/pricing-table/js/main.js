$(document).ready(function() {
    'use strict';

var tooltip = {
  /**
  * Make a Tooltip
  **/

  make: function make(target, content) {
    var orientation = arguments.length <= 2 || arguments[2] === undefined ? 'right' : arguments[2];
    var type = arguments.length <= 3 || arguments[3] === undefined ? 'help' : arguments[3];

    return new Tooltip({
      target: document.querySelector(target),
      content: content,
      classes: 'tooltip ' + type + '-' + orientation,
      position: orientation + ' middle'
    });
  },


  /**
  * Info Tooltip
  **/
  info: function info(t, c) {
    var o = arguments.length <= 2 || arguments[2] === undefined ? 'right' : arguments[2];

    return this.make(t, c, o, "info");
  }
};

var input4Tooltip = tooltip.make(".input1", "Amount you have to pay before insurance starts sharing the costs", "right", "info");
var input4Tooltip = tooltip.make(".input2", "Amount you have to pay before insurance starts sharing the costs", "right", "info");
var input4Tooltip = tooltip.make(".input3", "Amount you have to pay before insurance starts sharing the costs", "right", "info");
var input4Tooltip = tooltip.make(".input4", "Amount you have to pay before insurance starts sharing the costs", "left", "info");
})