

function repeat(str, count) {
    
    if (count < 0) {
        throw new Error("Count cannot be negative");
    }

    
    if (count === 0) {
        return "";
    }

    
    return str.repeat(count);
}

module.exports = repeat;
