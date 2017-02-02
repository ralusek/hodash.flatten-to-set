'use strict';


/**
 *
 */
module.exports = function(iter) {
  const output = new Set();
  iter.forEach(item => {
    // Duck typing for flatten. Does not confirm if function.
    if (item.forEach) {
      item.forEach(item => output.add(item));
    }
    else output.add(item);
  });
  return output;
};
