function repeat(str, count) {
    if(count > 0) {
        return str.repeat(count); 
    } else if (count === 0) {
        return " ";
    } else {
        throw new Error("Invalid number. Please enter a positive number or 0 for count");
    }     
}

module.exports = repeat;