'use strict';


/**
 *
 */
module.exports = function flattenToSet(iter, config) {
  config = config || {};

  const output = new Set();
  
  // Explicitly set function rather than check conditional within for performance
  // reasons.
  const addToOutput = config.formatter ?
    (item) => output.add(config.formatter(item)) :
    (item) => output.add(item);

  if (!config.deep) {
    iter.forEach(item => {
      // Duck typing for flatten. Does not confirm if function.
      if (item.forEach) item.forEach(addToOutput);
      else addToOutput(item);
    });
  }
  else deepFlattenToSet(iter, addToOutput);
  
  return output;
}

/**
 *
 */
function deepFlattenToSet(iter, addToOutput) {
  iter.forEach(item => {
    // Duck typing for flatten. Does not confirm if function.
    if (item.forEach) deepFlattenToSet(item, addToOutput);
    else addToOutput(item);
  });
}
