/**
 * tools.js - copyright @k33G_org
 * version 0.0.0
 * https://github.com/metals/adamantium
 * MIT License
 */
(function() {
  console.log("=== tools ===");


  console.log("- Object.assign: es6-shim");
  /*
  see https://greasyfork.org/nl/scripts/2666-object-assign-shim/code
   */
  var isObject = function (obj) {
    return obj && typeof obj === 'object';
  };

  if(Object.assign) return;
  Object.defineProperty(Object, 'assign', {
    value: function(target, source){
      var s, i, props;
      if (!isObject(target)) { throw new TypeError('target must be an object'); }
      for (s = 1; s < arguments.length; ++s) {
        source = arguments[s];
        if (!isObject(source)) { throw new TypeError('source ' + s + ' must be an object'); }
        props = Object.keys(Object(source));
        for (i = 0; i < props.length; ++i) {
          target[props[i]] = source[props[i]];
        }
      }
      return target;
    },
    enumerable: false
  });


  window.selectorAbility = {
    nodes: [],
    find: function (selector) {
      this.nodes = [].slice.apply(this.querySelectorAll(selector));
      return this;
    },
    findFirst: function() {
      return this.querySelector(selector);
    },
    all: function() { return this.nodes; },
    first: function() { return this.nodes[0]; },
    last: function() { return this.nodes[this.nodes.length-1]; }
  };





})();