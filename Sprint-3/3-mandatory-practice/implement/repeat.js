
function repeat(str, count) {
    if (typeof str !== "string" || typeof count !== "number") {
        return "Invalid input"; 
    }
    if (count < 0) {
        return "Count cannot be negative"; 
    }
    return str.repeat(count); 
}

module.exports = repeat;
