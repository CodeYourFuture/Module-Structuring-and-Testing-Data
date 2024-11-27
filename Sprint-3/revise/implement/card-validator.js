function card_validator(number){
    let num = [];
    // we'll get the number and put it in a list
    while(number != 0){
        num.push(number % 10);
        number = Math.floor(number / 10);
    }
    num.reverse();
    let freqMap = {
        0:0,1:0,2:0,3:0
    };
    let sum = 0;
    num.forEach(x => {
        freqMap[x]=( (freqMap[x]) ? freqMap[x] : 0) + 1;
        sum += x;
    })
    console.log(freqMap)
    let noneZeros = 0;
    Object.keys(freqMap).forEach(x=>{
        if(freqMap[x] > 0){
            noneZeros++;
        }
    })
    console.log(noneZeros)
    if(noneZeros >= 2 && (num[15] % 2) == 0 && sum > 16){ // checking the condintions two diffirent digits, last digit must be even and sum must be greater than 16
        return true;

    }
    else{
        return false;
    }
    // console.log(noneZeros)
}

console.log(card_validator(1111222233334444));
console.log(card_validator(4444444444444444));
console.log(card_validator(1111111111111110));

