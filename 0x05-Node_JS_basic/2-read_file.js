// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    // Check if the file exists
    if (!fs.existsSync(path)) {
      throw new Error(`File does not exist: ${path}`);
    }

    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Remove the header
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    // Create an object to store students by field
    const fieldCounts = {};

    students.forEach(student => {
      const [firstname, lastname, age, field] = student.split(',');
      if (!fieldCounts[field]) {
        fieldCounts[field] = [];
      }
      fieldCounts[field].push(firstname);
    });

    // Log the number of students in each field
    for (const [field, students] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error(`Cannot load the database: ${error.message}`);
  }
}

module.exports = countStudents;
