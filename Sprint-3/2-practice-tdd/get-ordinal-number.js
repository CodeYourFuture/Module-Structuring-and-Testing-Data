function getOrdinalNumber(num) {
  let lastTwoDigit = num % 100;
  let lastDigit = num % 10;
  if(lastTwoDigit == "11" || lastTwoDigit == "12" || lastTwoDigit == "13"){
    return num + "th"; 
  }
  else if(lastDigit =="1"){
    return num + "st";
  }
  else if(lastDigit == "2"){
    return num + "nd";
  }
  else if(lastDigit == "3"){
    return num + "rd";
  }
  else{
    return num + "th";
  }
}
module.exports = getOrdinalNumber;
