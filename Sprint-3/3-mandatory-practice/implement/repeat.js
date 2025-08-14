function repeat(str, count) {
    longStr = '';
    
    if (count >= 0) {
        for (let i = 0; i < count; i++) {
        longStr += str;
    } return longStr;
    } else 
    return "Not valid count"
    
}

// function repeat(str, count) {
//     arr = []; 

//     for (let i = 0; i < count; i++) {
//         arr.push(str);
//     }
//     return arr.join[''] 
// }

// function repeat(str, count) {
//     let arr = [];
//     let i = 0; 

//     while (i < count) {
//         arr.push(str);
//         i++;
//     } return arr.join('');
// }

module.exports = repeat;