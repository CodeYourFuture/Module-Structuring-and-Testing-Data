function countChar(stringOfCharacters, findCharacter) {
const totalCount=stringOfCharacters.split("");
Count=0
for(i=0; i<totalCount.length; i++){
    if(totalCount[i]===findCharacter){
        count++
    }
}
return count
}
console.log(countChar("aaaa","a"))
module.exports = countChar;


