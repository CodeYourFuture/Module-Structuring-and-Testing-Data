
const getAngleType = require('./get-angle-type');

const currentOutput = getAngleType(90);
const targetOutput = "Right angle";

test('Checks for a right angle', () => {
    expect(currentOutput).toEqual(targetOutput);
});

const currentOutput2 = getAngleType(45);
const targetOutput2 = "Acute angle";

test('Checks for an acute angle', () => {
    expect(currentOutput2).toEqual(targetOutput2);
});

const currentOutput3 = getAngleType(99);
const targetOutput3 = "Obtuse angle";

test('Checks for an obtuse angle', () => {
    expect(currentOutput3).toEqual(targetOutput3);
});

const currentOutput4 = getAngleType(145);
const targetOutput4 = "Obtuse angle";

test('Checks for an obtuse angle', () => {
    expect(currentOutput4).toEqual(targetOutput4);
});

const currentOutput5 = getAngleType(177);
const targetOutput5 = "Obtuse angle";

test('Checks for an obtuse angle', () => {
    expect(currentOutput5).toEqual(targetOutput5);
});

const currentOutput6 = getAngleType(180);
const targetOutput6 = "Straight angle";

test('Checks for a straight angle', () => {
    expect(currentOutput6).toEqual(targetOutput6);
});

const currentOutput7 = getAngleType(188);
const targetOutput7 = "Reflex angle";

test('Checks for an reflex angle', () => {
    expect(currentOutput7).toEqual(targetOutput7);
});

const currentOutput8 = getAngleType(260);
const targetOutput8 = "Reflex angle";

test('Checks for a reflex angle', () => {
    expect(currentOutput8).toEqual(targetOutput8);
});

const currentOutput9 = getAngleType(0);
const targetOutput9 = "Acute angle";

test('Checks for an acute angle', () => {
    expect(currentOutput9).toEqual(targetOutput9);
});

const currentOutput10 = getAngleType(-90);
const targetOutput10 = "Irrelevant";

test('Checks for an irrelevant angle', () => {
    expect(currentOutput10).toEqual(targetOutput10);
});