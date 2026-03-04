// function countChar(stringOfCharacters, findCharacter) {
//   let count = 0;
//   for (let i = 0; i < stringOfCharacters.length; i++) {
//     if (stringOfCharacters[i] === findCharacter) {
//       count++;
//     }
//   }

//   return count;
// }
// module.exports = countChar;
let numbers=[1,2,3,4,5,6,1,2,3,4,5,6]
let idxArray=[];
numbers.find((el,ix,numbers)=>{
    if (el===3){
      
  idxArray.push(ix);}
})
console.log(idxArray);

