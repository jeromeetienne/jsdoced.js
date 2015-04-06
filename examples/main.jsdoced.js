// Include better.js as global for node.js
global.Better = global.Better || require('better.js');

// define a function

/**
 * Add 2 numbers 
 * @param  {Number} value1 - first value to add
 * @param  {Number} value2 - second value to add
 * @return {Number} The result of the addition
 */
var addNumbers = Better.Function(function(value1, value2){
        return value1 + value2;
}, {
        arguments: [Number, Number],
        return: Number
});

// run it
console.log('result is', addNumbers('foo', 'bar'))
