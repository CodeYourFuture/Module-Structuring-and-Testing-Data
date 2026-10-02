import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function () {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("can correctly convert midnight", () =>
  assert.equal(formatAs12HourClock("00:00"), "12:00 am"));

test("converts noon 12:00", () =>
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm"));

test("converts 13:00", () =>
  assert.equal(formatAs12HourClock("13:00"), "1:00 pm"));

test("converts 12:59", () =>
  assert.equal(formatAs12HourClock("12:59"), "12:59 pm"));
