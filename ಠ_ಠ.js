(function (self) {
  "use strict";
  if ((typeof console !== 'undefined') && (typeof console.warn === 'function')) {
    var warn = self.console.warn;
    self['ಠ_ಠ'] = Function.prototype.bind.call(warn, console);
    self.console.warn = undefined;
  } else {
    self['ಠ_ಠ'] = function () {}
  }
}(typeof self !== 'undefined'? self : typeof global !== 'undefined' ? global : self));
