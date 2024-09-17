// A small http server

const { rejects } = require('assert');
const http = require('http');
const { resolve } = require('path');
const fs = require('fs').promises;

const port = 1245;
const host = 'localhost';

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8')
        .then((data) => {
            const lines = data.split('\n').filter(line => line.trim() !== '');
            const students = lines.slice(1);

            let output = 'Number of students: ${students.length}\n';

            const fieldCounts = {};

            students.forEach(student => {
                const [firstname, lastname, age, field] = student.split(',');
                if (!fieldCounts[field]) {
                    fieldCounts[field] = [];
                }
                fieldCounts[field].push(firstname);
            });
            for (const [field, students] of Object.entries(fieldCounts)) {
                output += 'Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n';
            }
            resolve(output);
        })
        .catch(() => {
            reject(new Error('Cannot load the database'));
        });
    });
}

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        res.end('Hello Holberton School!\n');
    } else if (req.url === '/students') {
        res.write('This is the list of our students');
        countStudents(databasePath)
        .then((studentsData) => {
            res.end(studentsData);
        })
        .catch((error) => {
            res.end(error.message);
        });
    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
});

app.listen(port, host, () => {
    console.log('Server running at http://${host}:${port}/');
});

module.exports = app;