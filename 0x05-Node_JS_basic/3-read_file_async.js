const fs = require('fs');

const countStudents = async (path) => {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    const csvFile = data.split('\n');
    const students = csvFile.slice(1, csvFile.length);

    console.log(`Number of students: ${students.length}`);

    const csStudents = students
      .filter((student) => student.endsWith('CS'))
      .map((stu) => stu.split(',')[0]);

    const sweStudents = students
      .filter((student) => student.endsWith('SWE'))
      .map((stu) => stu.split(',')[0]);

    console.log(
      `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(
        ', ',
      )}`,
    );
    console.log(
      `Number of students in SWE: ${
        sweStudents.length
      }. List: ${sweStudents.join(', ')}`,
    );
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
