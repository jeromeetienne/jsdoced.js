/**
 * silly default class
 * 
 * @constructor
 */
var MyClass= Better.Class(function(){
	console.log('inside constructor')
	
	/**
	 * silly comment
	 * @type {String}
	 */
	this._fooBar = 'blabla'
}, {
        arguments: [],
        privatize: true
})

MyClass.prototype._aPrivateFunction = function () {
	console.log('inside a private function')
};

MyClass.prototype.aPublicFunction = function () {
	console.log('inside a public function', this._fooBar)
};

//////////////////////////////

var myClass	= new MyClass()

myClass.aPublicFunction()

console.log('foobar from outside the class', myClass._fooBar)
// myClass._aPrivateFunction()

console