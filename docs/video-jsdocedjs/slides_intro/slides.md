title: jsdoced.js video - slide intro
output: index.html
--

<base target='_blank'/>
<style>pre { background: lightgrey; font-size: 100%;}</style>
<style>h1 { margin-top: 100px;}</style>
<!--<style>h2 { font-size: 200%; font-weight: 900;}</style>-->
<style>h3 { border-bottom: 0; text-align: center; }</style>


# JSDOCed Javascript

## by [@jerome_etienne](http://twitter.com/jerome_etienne)

--

## or 
### "How to compile 
### javascript to javascript
### to make javascript better"

--

### Javascript is used a lot
### in compilers these day

--

### People build new languages
### and make them compile to javascript

<!-- here put a lot of icons from the various people doing that. -->
<!-- google, facebook  -->

--

# But ...


--

## What about compiling

# Javascript
# to Javascript ?

--

## Could we

# Make Javascript
# Better ?

--

## By just compiling

# Javascript
# to Javascript ?

--


# ...

--

### It turns out we can :)

--

# Hello

### We gonna talk about 

--

### How to compile 

### javascript to javascript 

### to make javascript better

--

## First let's see our source language in more details

--

## We call our new javascript dialect

# [Jsdoced Javascript](http://betterjs.org/docs/betterjs-jsdocedjs.html)

--

## Remember...

--

### Compiling

### javascript to javascript 

### to make javascript better

--

### Source language

* "the language we compile"
* it has to be javascript
* because we compile **javascript** to javascript

--

### Take basic javascript function

```
var addNumbers = function(value1, value2){
        return value1 + value2
}
```

--

### Add some jsdoc

```
/**
 * add 2 numbers
 * @param {Number} value1 - the first number
 * @param {Number} value2 - the second number
 * @return {Number} - the result of the addition
 */
var addNumbers = function(value1, value2){
        return value1 + value2
}
```

--

### We got our source language!

--

### It is A Mariage in Javascript World!

# [JSDOC](http://usejsdoc.org) + [JS](http://en.wikipedia.org/wiki/JavaScript)


--

### So we call it

# [Jsdoced Javascript](http://betterjs.org/docs/betterjs-jsdocedjs.html)


--

# Possibilities of [Jsdoced Javascript](http://betterjs.org/docs/betterjs-jsdocedjs.html)

--

### What JSDOC adds to Plain JS ?
* Contains lot of info meta informations
* Information missing to javascript

--

### jsdoced.js adds new features
* strong typing
* private visibility

**Javascript with strong typing ? Exciting no ?**

--

### About Strong Typing

* ```@param``` strong typing for arguments
* ```@return``` strong typing for return value
* ```@type``` strong typing for property

--

### About Private Visibility

* ```@class``` to mark a function as constructor
* ```@private``` private visibility

--

## TODO which error will be detected now


--

# Benefits

## Over other javascript dialects
--

### No need to learn yet another language

- 100% plain old javascript
- use your existing code
- use your existing doc

**Easy Integration!**


--

### Test that your jsdoc is respected during execution

* Javascript is a dynamic language
* it has to be tested during execution

**Tests are done when they need to be**

--

### It detects a new family of error 

* jsdoc provide plenty of useful information
* it was rarely/never use to test code

**Expand test coverage !!!**

--

### The more you document your code the safer it becomes

- Documenting is good for your devs
- Testing is good for your users

**Create Virtuous cycle !**

--

# TODO outtro

--

# Check it out at [jsdocedjs.org](http://jsdocedjs.org)
