function countChar (str, char) {

    if (str === null || char === undefined) {
        throw new Error("Please enter a valid string") //This handles null and undefined inputs   
        } 

    let count = 0; //This starts the counter at 0 for the loop
    for (let i = 0; i < str.length; i++) { //This initialises the loop starting at 0 and ensure it runs for the length of the string while the i++ uses the increment operator to increase the count by 1 each loop
        if (str[i] === char) { //This checks whether a character is matched in the index loop
            count ++; //This adds 1 each time there is a character math
        }     
    }      
    return count;

}

module.exports = {countChar};