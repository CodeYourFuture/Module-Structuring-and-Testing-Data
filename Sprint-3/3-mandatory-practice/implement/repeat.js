//function repeat() {
   // return "hellohellohello";
//}

function repeat(str, times) {
    if (times < 0) {
        throw new Error("Count cannot be negative");
    }
    return str.repeat(times);
}


module.exports = repeat;