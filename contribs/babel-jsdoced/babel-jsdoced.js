
var jsdocParse	= require('../../libs/jsdocParse.js')

module.exports = function(babel) {
        var t = babel.types
	var contentLines;
        console.log('Loading my babel plugin')
        return {
                visitor: {
                        FunctionExpression : function(path) {
                                console.log("FunctionExpression HERE", path.node.loc.start.line)

				// get jsdocJson for this node
                                var lineNumber  = path.node.loc.start.line-1
                                var jsdocJson	= jsdocParse.extractJsdocJson(contentLines, lineNumber)
				// if no jsdocJson, do nothing
				if( jsdocJson === null )	return
                                
                                console.log('found jsdoc', jsdocJson)
                                console.log(path.node)
                                // TODO now add a line at the begining of the function 
                                // - to check the arguments
                                // TODO add a line at the end to check the return type
                                // - to check the return type
                        },

                        Program(path, file) {
                                // console.log('Program', file.file.code)
                        	contentLines   = file.file.code.split('\n')
			}

                        // Program(path, file) {
			// 	path.unshiftContainer('body', t.expressionStatement(t.stringLiteral('use helloworld')));
			// }

                        // BinaryExpression(path) {
                        //         // ...
                        //         console.log("BinaryExpression HERE")
                        // }
                }
        }
}