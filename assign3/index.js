var secondLargest = require('./function1.js');
var calculateFrequency = require('./function2.js');
var flatten = require('./function3.js');

console.log(secondLargest([111, 0, 20, 0, 2]));
console.log(calculateFrequency("shali is running fast"));
console.log(flatten({ "flatJSON": false, "i": { "am": { "not": { "so": { "flat": true, "unflat": false } }, "a": "tree" } }, "dates": [ { "day": 1 }, { "day": 8947 } ] }));
