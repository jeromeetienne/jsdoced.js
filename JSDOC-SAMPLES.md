## JSDoc Samples

How to comment your doc with jsdoc.

See [usejsdoc](http://usejsdoc.org) for details

- [@param](http://usejsdoc.org/tags-type.html) to specify parameter of a function.
- [@return](http://usejsdoc.org/tags-return.html) to specify the type of a returned value.
- [@constructor](http://usejsdoc.org/tags-constructor.html) 
  or [@class](http://usejsdoc.org/tags-class.html) to mark a function as constructor.

Especially the [@type](http://usejsdoc.org/tags-type.html) field. It explains 
how to specify various types.

- if a function is a constructor, it will be handled as a 
[Better.Class](http://betterjs.org/docs/betterjs-class.html)
- if a function isnt a constructor, it will be handled as a
[Better.Function](http://betterjs.org/docs/betterjs-function.html)

### How to comment a function

```
/**
 * add 2 numbers
 * @param {String} name - the name to measure
 * @return {Number} - the length of the name
 */
var nameLength = function(name){
	return name.length
}
```

### How to comment a contructor

```
/**
 * a great cat class
 * @constructor
 * @param {String} catName - the name of the cat
 */
THREEx.GreatCat = function(catName){
	// your code goes here
}
```
