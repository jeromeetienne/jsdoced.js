var babylon = require('babylon')

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
                                                /**
                                                 * replace return argument by
                                                 *
                                                 * {var return_value_12 = argument;
                                                 *  console.assert(typeof return_value_12 === "string");
                                                 *  return return_value_12
                                                 * }
                                                 */
                                                var newNode = babylon.parse('return "ddd"', {
                                                        allowReturnOutsideFunction : true
                                                });
                                                
                                                // var varName = path.scope.generateUidIdentifier("returnValue").name
                                                // var code = 'var '+varName+" = 2;"
                                                // console.log('code', code)
                                                // console.log(newNode.tokens)
                                                // console.assert(false)
                                                path.replaceWith(newNode);
                                                // path.replaceWithSourceString('return("ddd")')
                                                // path.remove
  // path.replaceWithMultiple([
  //   t.expressionStatement(t.stringLiteral("Is this the real life?")),
  //   t.expressionStatement(t.stringLiteral("Is this just fantasy?")),
  //   t.expressionStatement(t.stringLiteral("(Enjoy singing the rest of the song in your head)")),
  // ]);
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
