const _flattenToSet = require('../');

const data = [{name: 'Tomas'}, 43, 'hi', ['hello', 12], new Set(['I', 'am', 'set'])];

console.log(_flattenToSet(data));
