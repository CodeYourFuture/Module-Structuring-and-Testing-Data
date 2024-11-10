// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime(arg1){
    if (arg1%2 == 0){
        console.log('nah not prime');
        return;
    }

    for(ix=3; ix < arg1; ix++){
        if (arg1%ix == 0){
            console.log('not prime inside loop');
            return;
        }
      
    }

    console.log('is prime');


}

isPrime(7919);