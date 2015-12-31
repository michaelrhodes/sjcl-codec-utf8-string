var bitLength = require('sjcl-bit-array/bit-length');

/** Convert from a bitArray to a UTF-8 string. */
module.exports = function (arr) {
  var out = "", bl = bitLength(arr), i, tmp;
  for (i=0; i<bl/8; i++) {
    if ((i&3) === 0) {
      tmp = arr[i/4];
    }
    out += String.fromCharCode(tmp >>> 24);
    tmp <<= 8;
  }
  return decodeURIComponent(escape(out));
};
