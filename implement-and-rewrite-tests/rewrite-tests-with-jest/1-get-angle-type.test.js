import { getAngleType } from "../implement/1-get-angle-type.js";

test("Classifies acute angles", () => {
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

test("Classifies right angles", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

test("Classifies obtuse angles", () => {
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(120)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});

test("Classifies straight angles", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("Classifies reflex angles", () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(270)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});

test("Identifies invalid angles", () => {
  expect(getAngleType(0)).toEqual("Invalid angle");
  expect(getAngleType(360)).toEqual("Invalid angle");
  expect(getAngleType(-1)).toEqual("Invalid angle");
  expect(getAngleType(361)).toEqual("Invalid angle");
});
