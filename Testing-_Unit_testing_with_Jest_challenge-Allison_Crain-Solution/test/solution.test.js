const findLowestScoringStudent = require("../src/solution");

describe("findLowestScoringStudent()", () => {

  it("should return the student with the lowest score given a non-empty list of students", () => {
    const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];
    const expected = { name: "Morgan Sutton", score: 7.4 };
    const actual = findLowestScoringStudent(students);
    expect(actual).toEqual(expected);
  });

  it("should return null given an empty list of students", () => {
   const students = [];
    const expected = null;
    const actual = findLowestScoringStudent(students);
    expect(actual).toBe(expected);
  });
});