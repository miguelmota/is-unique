(function(root) {
  'use strict';

  function isUnique(collection) {
    if (typeof collection === 'number' || collection instanceof Number) {
      collection = collection.toString();
    }

    if (!(Array.isArray(collection) || typeof collection === 'string' || collection instanceof String)) {
      return false;
    }

    var position = collection.length;

    while(position--) {
     if (collection.indexOf(collection[position]) !== position) {
       return false;
     }
    }

    return true;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isUnique;
    }
    exports.isUnique = isUnique;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isUnique;
    });
  } else {
    root.isUnique = isUnique;
  }

})(this);
