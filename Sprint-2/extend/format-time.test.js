// formatAs12HourClock.test.js
const formatAs12HourClock = require("./format-time");

describe("formatAs12HourClock", () => {
  test("should format morning times correctly", () => {
    expect(formatAs12HourClock("08:00")).toBe("08:00 am");
  });

  test("should format afternoon times correctly", () => {
    expect(formatAs12HourClock("14:00")).toBe("2:00 pm");
  });

  test("should format midnight (00:00) correctly", () => {
    expect(formatAs12HourClock("00:00")).toBe("12:00 am");
  });

  test("should format noon (12:01) correctly", () => {
    expect(formatAs12HourClock("12:01")).toBe("12:01 pm");
  });

  test("should format late night (23:00) correctly", () => {
    expect(formatAs12HourClock("23:00")).toBe("11:00 pm");
  });
});
