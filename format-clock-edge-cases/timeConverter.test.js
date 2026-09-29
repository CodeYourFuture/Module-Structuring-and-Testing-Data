import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("can correctly convert time at midnight ", function () {
  assert.equal(formatAs12HourClock("00:00"), "12:00 AM");
});

test("can correctly convert time just after midnight", function () {
  assert.equal(formatAs12HourClock("00:01"), "12:01 AM");
});

test("can correctly convert time at the first normal hour", function () {
  assert.equal(formatAs12HourClock("01:00"), "01:00 AM");
});

test("can correctly convert morning time", function () {
  assert.equal(formatAs12HourClock("08:00"), "08:00 AM");
});

test("can correctly convert time on leading zeros in hour and minute", function () {
  assert.equal(formatAs12HourClock("09:05"), "09:05 AM");
});

test("can correctly convert time just last minute before noon", function () {
  assert.equal(formatAs12HourClock("11:59"), "11:59 AM");
});

test("can correctly convert time to PM at noon", function () {
  assert.equal(formatAs12HourClock("12:00"), "12:00 PM");
});

test("can correctly convert time just afternoon", function () {
  assert.equal(formatAs12HourClock("12:01"), "12:01 PM");
});

test("can correctly convert time last minute of the noon hour", function () {
  assert.equal(formatAs12HourClock("12:59"), "12:59 PM");
});

test("can correctly convert time first hour after noon", function () {
  assert.equal(formatAs12HourClock("13:00"), "01:00 PM");
});

test("correctly convert time after 12:00", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 PM");
});

test("can correctly convert time last minute of the day", function () {
  assert.equal(formatAs12HourClock("23:59"), "11:59 PM");
});

/* 
Edge cases to be tested.
   Input    Expected  What it tests
1. 00:00 -> 12:00 am  Midnight: hour 0 becomes 12
2. 00:01 -> 12:01 am  Just after midnight, still 12
3. 01:00 -> 01:00 am  First normal morning hour
4. 09:05 -> 09:05 am  Leading zeros in hour and minute
5. 11:59 -> 11:59 am  Last minute before noon
6. 12:00 -> 12:00 pm  Noon: switches to pm, hour stays 12
7. 12:01 -> 12:01 pm  Just after noon, must not become 00
8. 12:59 -> 12:59 pm  Last minute of the noon hour
9. 13:00 -> 01:00 pm  First hour after noon: 13 - 12, padded
10.23:59 -> 11:59 pm  Last minute of the day
*/
