import {formatAs12HourClock} from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function(){
    assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function() {
    assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

/* 
Edge cases to be tested.

1. 00:00
2. 00:01
3. 01:00
4. 09:05
5. 11:59
6. 23:59
7. 12:00
8. 12:01
9. 12:59
10.13:00
*/ 