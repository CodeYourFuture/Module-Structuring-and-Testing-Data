import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function () {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("correctly convert time after 12:00", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function () {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("can correctly convert midnight", function () {
  assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});

test("can correctly convert midday", function () {
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
});

test("can correctly convert 12:30 pm", function () {
  assert.equal(formatAs12HourClock("12:30"), "12:30 pm");
});

test("preserves minutes in the morning", function () {
  assert.equal(formatAs12HourClock("09:45"), "09:45 am");
});

test("preserves minutes in the afternoon", function () {
  assert.equal(formatAs12HourClock("13:45"), "1:45 pm");
});

test("correctly converts 1:00 pm", function () {
  assert.equal(formatAs12HourClock("13:00"), "1:00 pm");
});

test("correctly converts 6:30 pm", function () {
  assert.equal(formatAs12HourClock("18:30"), "6:30 pm");
});

test("correctly converts 11:59 pm", function () {
  assert.equal(formatAs12HourClock("23:59"), "11:59 pm");
});

test("correctly converts 11:59 am", function () {
  assert.equal(formatAs12HourClock("11:59"), "11:59 am");
});