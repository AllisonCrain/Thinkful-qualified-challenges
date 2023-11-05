/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/

function findStudentByName(students, name) {
let studentObject = students.find((student) => 
  student.name === name);
  if(!students.length) return null;
  
  return studentObject ? studentObject: null;
} 




module.exports = findStudentByName;
