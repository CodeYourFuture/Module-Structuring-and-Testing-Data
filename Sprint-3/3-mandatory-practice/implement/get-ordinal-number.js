function getOrdinalNumber(num) {

    const strange = [11,12,13];

// if number is 1 or end with 1 And not equal to 11 return with st
if (num ==1 || num%10 ==1 && num !=11){ 

 return `${num}st`;
}

//if num is equal to 11,12,13 return with th
else if (strange.includes(num)){
 return `${num}th`
}

// if num is equal to 2 or end with 2 and not equal to 12 then return nd
else if(num == 2 || num%10 == 2 && num != 12){

    return `${num}nd`;
}

// if num is equal to 3 or end with 3 and not equal to 13 then return rd
else if (num ==3 || num%10 ==3 && num !=13){
    return `${num}rd`;
}

// other digits return with th

else 
{
    return `${num}th`;
}

}

module.exports = getOrdinalNumber;

/*
11 th
12th
13th

1 & end with 1 st 
2 & end with 2 nd
3 & end with 3 rd


*/

value = getOrdinalNumber(21)
console.log(`the result is ${value} `);

value = getOrdinalNumber(11)
console.log(`the result is ${value} `);
value = getOrdinalNumber(12)
console.log(`the result is ${value} `);
value = getOrdinalNumber(13)
console.log(`the result is ${value} `);

value = getOrdinalNumber(22)
console.log(`the result is ${value} `);

value = getOrdinalNumber(33)
console.log(`the result is ${value} `);

value = getOrdinalNumber(20)
console.log(`the result is ${value} `);