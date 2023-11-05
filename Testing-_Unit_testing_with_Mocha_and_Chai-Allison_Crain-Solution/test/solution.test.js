// Write your tests here!
const expect = require("chai").expect;
const findStudentScoreByName = require("../src/solution");

describe ("findStudentScoreByName", () => {
  it ("should return score for given student",() => {
    const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];
    const expected = students[0].score;
    const existingStudent = "Leo Yeon-Joo";
    const actual = findStudentScoreByName(students, existingStudent);
    expect(actual).to.equal(expected);
  });
  it ("should return null if student cannot be found", () => {
    const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];
   const nonExistingStudent = "Terry Peters";
   const actual = findStudentScoreByName(students, nonExistingStudent);
    expect(actual).to.equal(null);
  });
});


