function checkTime(time){

    return time.slice(0,1)+time.slice(1,2)
}

console.log(checkTime("12:34")); // Output: 12 
console.log(checkTime("23:59")); // Output: 23

num1 = checkTime("13:34");

if (num1 > 12 && num1 < 24) {

    console.log("PM");

} else
{
    console.log("AM");
}