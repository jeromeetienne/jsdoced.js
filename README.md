jsdoced.js
==============

Tool which read your javascript code with jsdoc and ensure your jsdoc is respected when it is executed.

You write your javascript files as usual, you add classic jsdoc to it because you are a nice guy. Now ```jsdoced.js yourCode.js``` will produce a ```yourCode.better.js``` code. It is the same as ```youCode.js``` but includes all the checks to ensure your jsdoc is respected.
It uses [better.js](http://betterjs.org) to perform this testing during execution.

As better.js works run in browser and node.js, you can use that in any javascript. To run the produces betterjs code, just include [better.js](https://github.com/jeromeetienne/better.js/blob/master/build/better.js)
To see how to easily include it in your software, be sure to check [this workflow](https://github.com/jeromeetienne/better.js/blob/master/contribs/jsdoced.js/WORKFLOW.md).

## Inline Help

```bash
$ jsdoced.js -h
Usage: jsdoced.js [options] file.js file2.js...

Makes sure jsdoc is respected during execution.
More about better.js at http://betterjs.org

Options:
	-m, --source-map	Generate source map file. file.js into file.js.map

	-d DIR			Write generated code into DIR with a folder hierachie similar to relative
		path to the original file.js.

	-o, --output    	Output file (default STDOUT).

	-s, --strict-jsdoc	If @return or no @param are undefined in jsdoc, check it is nothing during execution

	-p,--privatize-class	Privatize the classes

	--log	Log events on stderr

	--property	Enable Better.Property (beta)
	--noproperty	Disable Better.Property (beta)

	-h	Display inline help

	-v	Display version

servecachedir [DIR]	server this directory as cache directory. default to .betterjs
```

# Support funky type syntax
* from [usejsdoc @type](http://usejsdoc.org/tags-type.html)
* {MyClass[]} - array of myclass
    - better.js: MyClass
* {?number} - A number or null.
    - better.js: [Number,null]
* {!number} - a number never null
    - better.js: [Number]
* @param {number} [foo] - optional number
    - better.js: [number|undefined]
