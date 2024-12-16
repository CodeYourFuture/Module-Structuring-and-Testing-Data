function repeat(str, count) {
if (count < 0 || count === null || count === undefined) { //Handles for negative numbers, null and undefined
    throw new Error("Please enter a positive number")
}

if (count === 0) { //If the count is input as 0, it will return an empty string
    return "";
}

//Loop to repeat a count of the string and append it
let result = ""; //Initialises an empty string
for (let i = 0; i < count; i++) { //Repeats for count
    result += str; //Append string to result
}

return result; //Return the final string 

}

module.exports = {repeat};