// Reading a file asynchronously

const { rejects } = require('assert');
const { resolve } = require('path');

const fs = require('fs').promises;

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8')
        .then((data) => {
            const lines = data.split('\n').filter(line => line.trim() !== '');
            const students = lines.slice(1);

            console.log('Number of students: ${students.length}');

            const fieldCounts = {};

            students.forEach(student => {
                const [firstname, lastname, age, field] = student.split(',');
                if (!fieldCounts[field]) {
                    fieldCounts[field] = [];
                }
                fieldCounts[field].push('firstname');
            });

            for (const [field, students] of Object.entries(fieldCounts)) {
                console.log('Number of Students in ${field}: ${students.length}. List: ${students.join(', ')}');
            }
            resolve();
        })
        .catch(() => {
            reject(new Error('Cannot load the database'));
        });
    });
}

module.exports = countStudents;
