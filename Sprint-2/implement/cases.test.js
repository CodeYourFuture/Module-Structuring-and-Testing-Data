const { upperSnakeCase } = require("./cases");
describe("Test for Uppercase snakecase", () => {
    test("cases for small case", () => {
        expect(upperSnakeCase("how are you doing?")).toBe("HOW_ARE_YOU_DOING?");
    });

    test("handles mixed case input", () => {
        expect(upperSnakeCase("Hello World")).toBe("HELLO_WORLD");
    });

    test("handles multiple spaces", () => {
        expect(upperSnakeCase("open  source    project")).toBe("OPEN_SOURCE_PROJECT");
    });

    test("handles special characters", () => {
        expect(upperSnakeCase("hello@world!")).toBe("HELLO@WORLD!");
    });

    test("handles numbers", () => {
        expect(upperSnakeCase("test123 case")).toBe("TEST123_CASE");
    });

    test("handles empty string", () => {
        expect(upperSnakeCase("")).toBe("");
    });
});