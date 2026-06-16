This is just an instruction for the first activity - but it is just for human consumption
We don't want the computer to run these 2 lines - how can we solve this problem?

//It ran the file and on line 1 it found the following errr (js:1)
// This is just an instruction for the first activity - but it is just for human consumption
//      ^^

// SyntaxError: Unexpected identifier 'is'
//this points to the error being "is" which is believed to be an unexpected identifier. This is because the comment was not commented out, so the first word was interpreted as an identifier, but then the next word also, which did not make sense. It did not go further, as it ran into issues on the second word. 