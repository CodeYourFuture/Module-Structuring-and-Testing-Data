function getOrdinalNumber(num) {
  if (num % 10 ==1 && num % 100 !=11  )
    return "1st";
  if (num % 10 ==2 && num % 100 !=12  )
    return "2nd";
  if (num % 10 ==3 && num % 100 !=13  )
    return "3rd";
  return "th"
}

module.exports = getOrdinalNumber;