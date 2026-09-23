import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function () {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

//if input is  equal to "00:00"
test(`can correctly convert input of "00:00"`, () =>
  assert.equal(formatAs12HourClock("00:00"), "12:00 am"));
//if input is equal to "12:00"
test(`can correctly convert input of "12:00"`, () =>
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm"));
//if input is equal to " 07:23"
test(`can correctly convert minutes`, () =>
  assert.equal(formatAs12HourClock("17:23"), "05:23 pm"));
// test with leading zeros
test("can correctly display with leading zeros", () =>
  assert.equal(formatAs12HourClock("03:07"), "03:07 am"));
