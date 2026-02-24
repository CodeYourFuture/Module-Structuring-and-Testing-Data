// This is just an instruction for the first activity - but it is just for human consumption
// We don't want the computer to run these 2 lines - how can we solve this problem?

//The error found when running the code-> SyntaxError: Unexpected identifier 'is'. 
// syntax errors means the grammar rules of the language has not been applied. The instruction is written in plain english in a js file. It is not written in js syntax so js cannot parse it. 

// An identifier just means:
//A variable name
//A function name
// Or any word that isn’t a keyword
// So "is" is being treated like a variable name — and the parser wasn’t expecting one at that position.

// //Solution:
/*In this case, comment out the code by adding two forward slashes to a single line comment or
a single slash and a multiplication sign to both ends of a double line comment like the one used for this comment.
Other solutions could be checking:
Missing quotes
Missing operator
Missing comma
Or misplaced word
*/