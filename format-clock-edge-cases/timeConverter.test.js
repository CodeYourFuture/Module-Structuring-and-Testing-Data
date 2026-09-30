import {formatAs12HourClock} from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("can return 'invalid input.'", function(){
    assert.equal(formatAs12HourClock("25:00"), "invalid input.");
});

test("can return 'invalid input.'", function(){
    assert.equal(formatAs12HourClock("-01:00"), "invalid input.");
})

test("can correctly convert morning time 24:12", function() {
    assert.equal(formatAs12HourClock("24:12"), "12:12am");
});

test("can correctly convert morning time 00:12", function() {
    assert.equal(formatAs12HourClock("00:12"), "12:12am");
});

test("can correctly convert afternoon time 12:12", function() {
    assert.equal(formatAs12HourClock("12:12"), "12:12pm");
});

test("can correctly convert afternoon time 15:30", function() {
    assert.equal(formatAs12HourClock("15:30"), "3:30pm");
});

test("can correctly convert morning time 03:45", function() {
    assert.equal(formatAs12HourClock("03:45"), "3:45am");
});

