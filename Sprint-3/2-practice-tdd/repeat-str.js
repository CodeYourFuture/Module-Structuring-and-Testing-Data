function repeatStr(word, wordCounter) {
    // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
    // The goal is to re-implement that function, not to use it.
    let count = 0;
    let repeatedString = []

    if (wordCounter < 0) { // rejects negative numbers
        throw new Error("Enter a positive number")
    }
    if(wordCounter === 0){
        return ""
    }
    if(wordCounter === 1){
        return word
    }
    if(wordCounter > 1){
        while(count < wordCounter){
            count++
            repeatedString.push(word)
        }
    }
return repeatedString.join("")
}
module.exports = repeatStr;
