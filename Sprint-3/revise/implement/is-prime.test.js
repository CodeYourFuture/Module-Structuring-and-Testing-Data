// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime
function isPrime(num){
    let infiniteNum = [2,5,];
    let count = 0;
    for (let i = 0; i < Infinity; i++){
        if (num%infiniteNum[i] === 0){
            count++
            if (count === 2){
                return `${num} is a prime number.`;
            }
            else {
                return `${num} is not a prime number.`;
            }
        }
    }
}
console.log(isPrime(3));
/*test ('expected output: 3 is a prime number', ()=>{
    expect(isPrime(3)).toBe("3 is a prime number.")
})
//bug: emptiness! */