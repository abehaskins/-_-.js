(function (self) {
  "use strict";
  if ((typeof console !== 'undefined') && (typeof console.warn === 'function')) {
    var warn = window.console.warn;
    self['ಠ_ಠ'] = warn.bind(console);
    window.console.warn = undefined;
  } else {
    self['ಠ_ಠ'] = function () {}
  }
}(this));
