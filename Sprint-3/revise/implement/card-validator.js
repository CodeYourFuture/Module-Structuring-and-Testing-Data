function cardValidator(input) {
    //in case of whitespace, we can remove it by using trim
    input = input.trim();

    //checks if all the characters are digits
    if (!/^\d+$/.test(input)) return false;


    let count = 0;
    //counts the number of duplicates, it should be more than 1
    let duplicates = [];
    let total = 0;
    //the total should be more than 16
    if (input.length === 16) {
        for (let i = 0; i < input.length; i++) {
            //if the value is a Number
            if (!isNaN(Number(input[i])) && input[i] !== ' ') {
                //add the numbers to get a total
                total += Number(input[i]);
                if (!duplicates.includes(Number(input[i]))) {
                    //find the amount of duplicates and count them
                    duplicates.push(Number(input[i]));
                    count += 1;
                }

            }
            //if its not a number return false
            else {
                return false;
            }

        }
        //the count should exceed 1, the last number should be even and the total should exceed 16
        if (count > 1 && (Number(input[input.length - 1]) % 2 === 0) && total > 16) {
            return true;
        }
        //if it doesnt meet the above requirements return false
        else {
            return false;
        }

    }
    //if its not 16 characters long return false
    else {
        return false;
    }
}

console.log(cardValidator("4444444444444444"));
console.log(cardValidator("9999777788880000"));
console.log(cardValidator("6666666666661666"));

console.log(cardValidator("a92332119c011112"));
console.log(cardValidator("1111111111111110"));
console.log(cardValidator("6666666666666661"));
