import {formatAs12HourClock} from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", () => {
    assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", () => {
    assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});
test("converts a single-digit morning hour and drops leading zero", () => {
    assert.equal(formatAs12HourClock("08:00"), "8:00am");
})
test("converts exactly to midnight", () => {
    assert.equal(formatAs12HourClock("00:00"), "12:00am");
})
test("converts time just after midnight", () => {
    assert.equal(formatAs12HourClock("00:30"), "12:30am");
})
test("converts the last minute before noon", () => {
    assert.equal(formatAs12HourClock("11:59"), "11:59am");
})