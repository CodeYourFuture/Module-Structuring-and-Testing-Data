function countChar(stringOfCharacters, findCharacter) {
totalCount=stringOfCharacters.split("");
Count=0
for(i=0; i<totalCount.length; i++){
    if(totalCount[i]===findCharacter){
        Count++
    }
}
return Count
}
console.log(countChar("AAA","A"))
module.exports = countChar;


