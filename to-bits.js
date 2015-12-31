var partial = require('sjcl-bit-array/partial');

/** Convert from a UTF-8 string to a bitArray. */
module.exports = function (str) {
  str = unescape(encodeURIComponent(str));
  var out = [], i, l=str.length, tmp=0;
  for (i=0; i<l; i++) {
    tmp = tmp << 8 | str.charCodeAt(i);
    if ((i&3) === 3) {
      out.push(tmp);
      tmp = 0;
    }
  }
  if (i&3) {
    out.push(partial(8*(i&3), tmp));
  }
  return out;
};
