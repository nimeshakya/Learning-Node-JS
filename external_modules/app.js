// loadash example
const _ = require('loadash');

const myArr = [1, [2, [3, [4, [5]]]]];

const newItem = _.flattenDeep(myArr);

console.log(newItem);
