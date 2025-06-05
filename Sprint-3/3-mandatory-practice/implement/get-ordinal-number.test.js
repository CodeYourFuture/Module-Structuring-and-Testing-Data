const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    });

// Decided to do some "robust testing" :)
describe("getOrdinalNumber Tests", () => {
  test("Numbers ending in 0", () => {
    expect(getOrdinalNumber(30)).toEqual("30th");
    expect(getOrdinalNumber(400)).toEqual("400th");
    expect(getOrdinalNumber(5000)).toEqual("5000th");
  });

  test("Numbers ending in 1", () => {
    expect(getOrdinalNumber(31)).toEqual("31st");
    expect(getOrdinalNumber(401)).toEqual("401st");
    expect(getOrdinalNumber(5001)).toEqual("5001st");
  });

  test("Numbers ending in 2", () => {
    expect(getOrdinalNumber(32)).toEqual("32nd");
    expect(getOrdinalNumber(402)).toEqual("402nd");
    expect(getOrdinalNumber(5002)).toEqual("5002nd");
  });

  test("Numbers ending in 3", () => {
    expect(getOrdinalNumber(33)).toEqual("33rd");
    expect(getOrdinalNumber(403)).toEqual("403rd");
    expect(getOrdinalNumber(5003)).toEqual("5003rd");
  });

  test("Numbers ending in 4, 5, 6, 7, 8 or 9", () => {
    expect(getOrdinalNumber(34)).toEqual("34th");
    expect(getOrdinalNumber(405)).toEqual("405th");
    expect(getOrdinalNumber(5006)).toEqual("5006th");
    expect(getOrdinalNumber(67)).toEqual("67th");
    expect(getOrdinalNumber(708)).toEqual("708th");
    expect(getOrdinalNumber(8009)).toEqual("8009th");
  });

  test("Numbers less than 20", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(2)).toEqual("2nd");
    expect(getOrdinalNumber(3)).toEqual("3rd");
    expect(getOrdinalNumber(4)).toEqual("4th");
    expect(getOrdinalNumber(5)).toEqual("5th");
    expect(getOrdinalNumber(6)).toEqual("6th");
    expect(getOrdinalNumber(7)).toEqual("7th");
    expect(getOrdinalNumber(8)).toEqual("8th");
    expect(getOrdinalNumber(9)).toEqual("9th");
    expect(getOrdinalNumber(10)).toEqual("10th");
    expect(getOrdinalNumber(11)).toEqual("11th");
    expect(getOrdinalNumber(12)).toEqual("12th");
    expect(getOrdinalNumber(13)).toEqual("13th");
    expect(getOrdinalNumber(14)).toEqual("14th");
    expect(getOrdinalNumber(15)).toEqual("15th");
    expect(getOrdinalNumber(16)).toEqual("16th");
    expect(getOrdinalNumber(17)).toEqual("17th");
    expect(getOrdinalNumber(18)).toEqual("18th");
    expect(getOrdinalNumber(19)).toEqual("19th");
  });

  test("Large numbers", () => {
    expect(getOrdinalNumber(5441548351)).toEqual("5441548351st");
    expect(getOrdinalNumber(5464910548351)).toEqual("5464910548351st");
    expect(getOrdinalNumber(5649461956498351)).toEqual("5649461956498351st");

    expect(getOrdinalNumber(5441548372)).toEqual("5441548372nd");
    expect(getOrdinalNumber(5464910548352)).toEqual("5464910548352nd");
    expect(getOrdinalNumber(5649461956498352)).toEqual("5649461956498352nd");

    expect(getOrdinalNumber(5441548353)).toEqual("5441548353rd");
    expect(getOrdinalNumber(5464910548353)).toEqual("5464910548353rd");
    expect(getOrdinalNumber(5649461956498353)).toEqual("5649461956498353rd");

    expect(getOrdinalNumber(5441548354)).toEqual("5441548354th");
    expect(getOrdinalNumber(5464910548356)).toEqual("5464910548356th");
    expect(getOrdinalNumber(5649461956498359)).toEqual("5649461956498359th");
  });

  test("Invalid entries", () => {
    expect(getOrdinalNumber(0)).toEqual("Not a valid number input");
    expect(getOrdinalNumber(-1)).toEqual("Not a valid number input");
    expect(getOrdinalNumber(-69)).toEqual("Not a valid number input");
    expect(getOrdinalNumber(69.69)).toEqual("Not a valid number input");
    expect(getOrdinalNumber("69")).toEqual("Not a valid number input");
    expect(getOrdinalNumber({ 69: 69 })).toEqual("Not a valid number input");
    expect(getOrdinalNumber([69])).toEqual("Not a valid number input");
    expect(getOrdinalNumber([])).toEqual("Not a valid number input");
  });
});