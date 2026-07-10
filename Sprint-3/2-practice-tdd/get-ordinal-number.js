function getOrdinalNumber(num) {
  return "1st";
}

module.exports = getOrdinalNumber;
// this is a code i came up with to get the ordinal number of a given number. 
// I will now write tests to check if it works correctly.

function getOrdinalNumber(n) {
  const pr = new Intl.PluralRules("en-US", { type: "ordinal" });
  const suffixes = { one: "st", two: "nd", few: "rd", other: "th" };
  const rule = pr.select(n);
  return `${n}${suffixes[rule]}`;
}