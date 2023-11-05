// Write your tests here!
const expect = require("chai").expect;
const findStudentByName = require("../src/solution");


describe("findStudentByName", () => {
  it("should return the full student object for correct student name", () => {
  const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];
    const actual = findStudentByName(students, "Leo Yeon-Joo");
    const expected = { name: "Leo Yeon-Joo", score: 8.9 };
    expect(actual).to.eql(expected);
  });
  it("should return null if student not found", () => {
    const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];
    const name = null;
    const actual = findStudentByName(students, name);
    expect(actual).to.be.null;
  });
});