const {formatAs12HourClock} = require("./format-time");

describe('formatAs12HourClock', () => {
  test('formats 24h time to 12h time', () => {
    expect(formatAs12HourClock("14:30")).toBe("2:30 pm");
  });
  test('formats midnight (00:00) correctly', () => {
    expect(formatAs12HourClock("00:00")).toBe("12:00 am");
  });

  test('formats noon (12:00) correctly', () => {
    expect(formatAs12HourClock("12:00")).toBe("12:00 pm");
  });

  test('formats morning times (AM) correctly', () => {
    expect(formatAs12HourClock("09:00")).toBe("9:00 am");
    expect(formatAs12HourClock("11:00")).toBe("11:00 am");
  });

  test('formats afternoon/evening times (PM) correctly', () => {
    expect(formatAs12HourClock("13:00")).toBe("1:00 pm");
    expect(formatAs12HourClock("23:00")).toBe("11:00 pm");
  });

  test('handles single digit hours correctly', () => {
    expect(formatAs12HourClock("08:00")).toBe("8:00 am");
    expect(formatAs12HourClock("01:00")).toBe("1:00 am");
  });
});