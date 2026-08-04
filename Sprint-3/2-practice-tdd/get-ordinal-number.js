function getOrdinalNumber(num) {
  let getStr = num.toString();
  let lastTwoDigit = getStr.slice(-2);
  let lastDigit = getStr.slice(-1);
  if(lastTwoDigit == "11" || lastTwoDigit == "12" || lastTwoDigit == "13"){
    return getStr + "th"; 
  }
  else if(lastDigit =="1"){
    return getStr + "st";
  }
  else if(lastDigit == "2"){
    return getStr + "nd";
  }
  else if(lastDigit == "3"){
    return getStr + "rd";
  }
  else{
    return getStr + "th";
  }
}
module.exports = getOrdinalNumber;
