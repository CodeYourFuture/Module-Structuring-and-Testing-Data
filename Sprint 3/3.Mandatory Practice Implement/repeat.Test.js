const repeat = require("./repeat");

test("should repeat 'hello' 3 times", () => {
    expect(repeat("hello", 3)).toEqual("hellohellohello");
});

test("should repeat 'abc' 2 times", () => {
    expect(repeat("abc", 2)).toEqual("abcabc");
});

test("should return an empty string when repeated 0 times", () => {
    expect(repeat("test", 0)).toEqual("");
});
