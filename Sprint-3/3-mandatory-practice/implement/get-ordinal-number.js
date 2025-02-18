function getOrdinalNumber(num) {
  if (num === 1) return "1st";
  else if (num === 2) return "2nd";
  else if (num === 3) return "3rd";
  else if (num >= 4 && num <= 10) return `${num}th`;
  else return "This function takes number from 1-10!";
}

module.exports = getOrdinalNumber;
