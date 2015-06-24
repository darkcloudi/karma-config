(function () {
 
  // global on the server, window in the browser
  var root = this;
 
  var _async = (function () {
 
    var async = {};
 
    ... all the library code ...
 
    return async;
  }());
 
  // Meteor
  if (typeof Package !== 'undefined') {
    async = _async;
  }
  // AMD / RequireJS
  else if (typeof define !== 'undefined' && define.amd) {
      define([], function () {
          return _async;
      });
  }
  // Node.js
  else if (typeof module !== 'undefined' && module.exports) {
      module.exports = _async;
  }
  // included directly via <script> tag
  else {
      root.async = _async;
  }
}());
