// postgress queries
const getAllStudents = 'SELECT * FROM "Student"';
const getStudentById = 'SELECT * FROM "Student" WHERE "ID" = $1';
const isNameExist = 'SELECT s FROM "Student" s WHERE "s.Name" = $1 ';
const addStudents =
  'INSERT INTO "Student" (Name, Father Name, Age, Course) VALUES ($1, $2, $3, $4)  ';

module.exports = {
  getAllStudents,
  getStudentById,
  isNameExist,
  addStudents,
};
