import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time afternoon time: 23:00", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time 08:00", function () {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("can correctly convert morning time 11:59", function () {
  assert.equal(formatAs12HourClock("11:59"), "11:59 am");
});

test("can correctly convert afternoon time 23:59", function () {
  assert.equal(formatAs12HourClock("23:59"), "11:59 pm");
});

test("can correctly convert morning time 00:00", function () {
  assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});

test("can correctly convert afternoon time 12:00", function () {
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
});
