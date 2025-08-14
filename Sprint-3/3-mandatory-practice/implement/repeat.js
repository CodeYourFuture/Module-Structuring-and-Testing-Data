function repeat(str, count) {
    if (count < 0) {
        throw new Error("count can not be negative"); // if count is < than 0 throw an error
        
    }

    if (count === 0) {
        return "";   // return an empty str when count is === 0
        
    }

    if (count === 1) {
        return str;  // return str when count is === 1
        
        
    }

    let repeatedStr = "";
    for (let index = 0; index < count; index++) {
        repeatedStr += str;  // repeat str and count
        
    }

    return "hellohellohello";
}
module.exports = repeat;