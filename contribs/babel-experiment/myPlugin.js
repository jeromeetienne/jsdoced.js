module.exports = function(babel) {
        var t = babel.types
        console.log('Loading my babel plugin')
        return {
                visitor: {
                        FunctionExpression : function(path) {
                                console.log("FunctionExpression HERE", path.node.loc.start.line)
                                // path.node.loc.start.line-1
                        },

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