'use strict';


/**
 *
 */
module.exports = function flattenToSet(iter, deep) {
  const output = new Set();

  if (!deep) {
    iter.forEach(item => {
      // Duck typing for flatten. Does not confirm if function.
      if (item.forEach) {
        item.forEach(item => output.add(item));
      }
      else output.add(item);
    });
  }
  else deepFlattenToSet(iter, output);
  
  return output;
}

/**
 *
 */
function deepFlattenToSet(iter, output) {
  iter.forEach(item => {
    // Duck typing for flatten. Does not confirm if function.
    if (item.forEach) deepFlattenToSet(item, output);
    else output.add(item);
  });
}
