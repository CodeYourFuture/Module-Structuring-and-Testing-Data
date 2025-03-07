// function repeat() {
//     return "hellohellohello";
// }

function repeat(str, count) { 
    if (count < 0) {return ""};
    return str.repeat(count);
    
}
module.exports = repeat;