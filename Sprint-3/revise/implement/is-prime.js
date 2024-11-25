function isPrime(num) {

    let count = 0;
    if (num >= 1) {

        for (let i = 1; i <= num; i++) {

            if (num % i === 0) {

                count += 1;

            }

        }

        if (count === 2) {
            return true;
        }
        else {
            return false;
        }
    }
    else if (num < 1) {
        throw new Error("This function works with positive integers only.")
    }

}

// console.log(isPrime(1));
// console.log(isPrime(11));
// console.log(isPrime(2));
// console.log(isPrime(5));

module.exports = isPrime;