function countChar(stringOfCharacters, findCharacter) {
const totalCount=stringOfCharacters.split("");
let count=0
for(let i=0; i<totalCount.length; i++){
    if(totalCount[i]===findCharacter){
        count++
    }
}
return count
}
console.log(countChar("aaaa","a"))
module.exports = countChar;


