//Breakdown:
//countChar function counts the number of times a character appears in a string.
//In places where the targeted character occurs multiple times our function should count these occurances.
//our function should be case sensitive if the targeted character is not present in the string it should return zero.
//I need a for loop and an if statement
// we wrote this as a pair and it works but we should probably do some testing

function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
const str = "drop the rock troll";
const charToCount = 'o';
const result = countChar(str, charToCount);
console.log(`We found ${result} of ${charToCount} in the input string: ${str}`);
