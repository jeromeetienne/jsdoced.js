var babylon = require('babylon')
var template = require('babel-template')
var generate = require('babel-generator')

var jsdocParse	= require('../../libs/jsdocParse.js')

function generateCodeJsdocCheckArguments(jsdocJson){
        var code = '';
        Object.keys(jsdocJson.params).forEach(function(name){
                var param = jsdocJson.params[name]
                if( param.type === 'String' ){
                        code += "console.assert(typeof "+name+" === 'string' );";                        
                }
        })
        return code;
}

module.exports = function(babel) {
        var t = babel.types
	var contentLines;
        console.log('Loading my babel plugin')
        var RETURN_MARKER = Symbol();
        return {
                visitor: {
                        FunctionDeclaration : function(path) {
                                console.log("FunctionDeclaration HERE")

				// get jsdocJson for this node
                                var lineNumber  = path.node.loc.start.line-1
                                var jsdocJson	= jsdocParse.extractJsdocJson(contentLines, lineNumber)
				// if no jsdocJson, do nothing
				if( jsdocJson === null )	return
                                console.log('found jsdoc', jsdocJson)

                                // // console.log(path.node.body.body)
                                var nodeFunctionBody = path.node.body.body
                                // nodeFunctionBody.unshift(t.expressionStatement(t.stringLiteral("This is the begining.")))
                                // nodeFunctionBody.push(t.expressionStatement(t.stringLiteral("At the end.")))
                                
                                // var code = "console.assert(typeof myString === 'string' );";
                                var code = generateCodeJsdocCheckArguments(jsdocJson)
                                var newNode = babylon.parse(code);
                                nodeFunctionBody.unshift(newNode);
                                
                                // TODO to trap the return, do a visitor to get the return at the root of the function
                                // 
                                var visitorReturn = {
                                        ReturnStatement : function(path){
                                                console.log('ReturnStatement', path.node)

                                                // When processing the 'return' path, mark it so you know you've processed it.
                                                if (path.node[RETURN_MARKER]) return;
                                                
                                                var returnTemplate = babel.template(`
                                                        {
                                                                var VARNAME = RETURN_VALUE;
                                                                console.assert(VARNAME instanceof String);
                                                                return VARNAME;
                                                        }
                                                `);

                                                var block = returnTemplate({
                                                        VARNAME : path.scope.generateUidIdentifier("returnValue"),
                                                        RETURN_VALUE : path.node.argument,
                                                });
                                                block.body[2][RETURN_MARKER] = true;
                                                path.replaceWith(block);
                                        },
                                }
                                path.traverse(visitorReturn);
                        },

                        Program(path, file) {
                                // console.log('Program', file.file.code)
                        	contentLines   = file.file.code.split('\n')
			},


                        // FunctionExpression : function(path) {
                        //         console.log("FunctionExpression HERE", path.node.loc.start.line)
                        // 
                        //         var nodeFunctionBody = path.parent.init.body.body
                        // },
                }
        }
}
