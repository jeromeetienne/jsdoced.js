/**
 * This is a super function
 * @param {String} myString1 - a super string
 * @param {String} myString2 - a super string
 * @return {String} - a super string
 */
function myFunctionDeclaration(myString1, myString2){
        console.log('myString is', myString2);
        var n = 2;
        return n + (function(){ return 2;});
}
