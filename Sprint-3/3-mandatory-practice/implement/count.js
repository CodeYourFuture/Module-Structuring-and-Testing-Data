function countChar(str, char) {
  if (typeof str !== "string") {
    throw new Error("Invalid input: str must be a string");
  }
  if (typeof char !== "string" || char.length !== 1) {
    throw new Error("Invalid input: char must be a single character string");
  }

  return str.split("").filter((c) => c === char).length;
}

module.exports = countChar;
