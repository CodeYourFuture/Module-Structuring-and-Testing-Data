// function isPrime(num) {
//     //function will check whether the given number is a prime number according to the conditions given
//     let count = 0;
//     if (num >= 1) {

//         //divide the given number by the iterations if the number is divisible by (1 and itself ONLY) then it is prime and will have a count of 2
//         //Otherwise it is not a prime number
//         for (let i = 1; i <= num; i++) {

//             if (num % i === 0) {

//                 count += 1;

//             }

//         }

//         if (count === 2) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
//     else if (num < 1) {
//         throw new Error("This function works with positive integers only.")
//     }

// }

function isPrime(num) {

    //dont need to use else if since all the statements are return statements which exits the function
    if (num < 2) {
        //dont throw an error just return false
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i * i <= num; i += 2) {
        //can skip and make i increment by 2 since even numbers dont count

        //if the num is divisible by any increment given
        if (num % i === 0) {
            return false;
        }

    }

    //if all other requirements are not met then return true
    return true;

}
// console.log(isPrime(1));
// console.log(isPrime(11));
// console.log(isPrime(2));
// console.log(isPrime(5));

module.exports = isPrime;