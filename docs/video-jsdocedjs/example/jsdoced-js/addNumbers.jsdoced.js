/**
 * add numbers
 * 
 * @param {Number} value1 - the first value
 * @param {Number} value2 - the second value
 * @returns {Number} the result of the addition
 */
var addNumbers = Better.Function(function(value1, value2){
	return value1 + value2
}, {
        arguments: [Number, Number],
        return: Number
})