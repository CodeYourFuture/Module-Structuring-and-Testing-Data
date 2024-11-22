// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime(num){
    if(num < 2){
        return `${num} is not a prime number`
    }
    for (let i = 2; i < num ; i++){
        if (num % i === 0){
            return `${num} is not a prime number`
        }
    }
    return `${num} is a prime number`
}



test('expecting 17 to be a prime number', () => {
    expect(isPrime(17)).toBe(`17 is a prime number`)
}) //passed

test('expecting 3 to be a prime number', () => {
    expect(isPrime(3)).toBe(`3 is a prime number`)
}) //passed