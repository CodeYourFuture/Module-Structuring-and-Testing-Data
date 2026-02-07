function upperCaseSnake(str) {
  const upperCaseSnake = str.toUpperCase().replaceAll(" ", "_");

  return upperCaseSnake;
}

let returnedUpperCaseSnake = upperCaseSnake("hello_there");
let actualUpperCaseSnake = "HELLO_THERE";

console.assert(
  returnedUpperCaseSnake === actualUpperCaseSnake,
  `returned upperCaseSnake: ${returnedUpperCaseSnake}, actual upperCaseSnake: ${actualUpperCaseSnake}`
);

returnedUpperCaseSnake = upperCaseSnake("lord of the rings");
actualUpperCaseSnake = "LORD_OF_THE_RINGS";

console.assert(
  returnedUpperCaseSnake === actualUpperCaseSnake,
  `returned upperCaseSnake: ${returnedUpperCaseSnake}, actual upperCaseSnake: ${actualUpperCaseSnake}`
);
