/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/

function findStudentScoreByName(students, name) {
  let score = 0;
  for (let i = 0; i < students.length; i++) {
    if(students[i].name === name) {
      return students[i].score;
    }
  }
  return null;
}

module.exports = findStudentScoreByName;
