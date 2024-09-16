Here’s a detailed `README.md` for your Node.js project:

---

# Node.js Basics

This project focuses on building and managing HTTP servers using Node.js. It covers essential topics such as working with synchronous and asynchronous file systems, handling CSV data, and setting up Express.js servers.

## Table of Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Tasks](#tasks)
  - [Task 0: Basic JS with Node.js](#task-0-basic-js-with-nodejs)
  - [Task 1: Process stdin](#task-1-process-stdin)
  - [Task 2: Read File Synchronously](#task-2-read-file-synchronously)
  - [Task 3: Read File Asynchronously](#task-3-read-file-asynchronously)
  - [Task 4: Basic HTTP Server](#task-4-basic-http-server)
  - [Task 5: More Complex HTTP Server](#task-5-more-complex-http-server)
  - [Task 6: Express Server](#task-6-express-server)
  - [Task 7 & 8: Complex Express Server](#task-7--8-complex-express-server)
- [Usage](#usage)

---

## Technologies

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **CSV**: Data format used for reading and processing student information.
- **ES6**: JavaScript ECMAScript 6+ features (arrow functions, promises, etc.).

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/yourusername/nodejs-basics.git
    cd nodejs-basics
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Make sure you have Node.js installed:

    ```bash
    node -v
    ```

## Project Structure

```bash
nodejs-basics/
│
├── controllers/
│   └── studentController.js  # Handles routes related to students
├── routes/
│   └── studentRoutes.js      # Defines routes for the Express server
├── utils/
│   └── fileHandler.js        # File reading utilities (sync & async)
├── data/
│   └── students.csv          # Sample CSV data of students
├── server.js                 # Express server setup
├── basicServer.js            # Basic HTTP server setup
├── displayMessage.js         # Simple console output function
├── countStudentsSync.js      # Synchronous CSV reading function
├── countStudentsAsync.js     # Asynchronous CSV reading function
└── README.md                 # Project documentation
```

## Tasks

### Task 0: Basic JS with Node.js

Create a basic function `displayMessage` that logs a message to the console.

- **File**: `displayMessage.js`
- **Usage**:

    ```bash
    node displayMessage.js
    ```

### Task 1: Process stdin

Write a script that reads input from the user and prints a greeting with the user’s name.

- **File**: `stdin.js`
- **Usage**:

    ```bash
    node stdin.js
    ```

### Task 2: Read File Synchronously

Create a function `countStudentsSync` that reads the `students.csv` file synchronously, parses its content, and logs information about the students.

- **File**: `countStudentsSync.js`
- **Usage**:

    ```bash
    node countStudentsSync.js
    ```

### Task 3: Read File Asynchronously

Implement the same functionality as Task 2, but using asynchronous file reading (promises).

- **File**: `countStudentsAsync.js`
- **Usage**:

    ```bash
    node countStudentsAsync.js
    ```

### Task 4: Basic HTTP Server

Create a basic HTTP server using Node’s built-in `http` module. The server should return "Hello Holberton School!" on every request.

- **File**: `basicServer.js`
- **Usage**:

    ```bash
    node basicServer.js
    ```

### Task 5: More Complex HTTP Server

Extend the basic server to handle requests to `/students`, returning information about students from the `students.csv` file.

- **File**: `basicServer.js`
- **Usage**:

    ```bash
    node basicServer.js
    ```

### Task 6: Express Server

Replace the basic HTTP server with an Express server that serves the same routes, including `/students`.

- **File**: `server.js`
- **Usage**:

    ```bash
    node server.js
    ```

### Task 7 & 8: Complex Express Server

Extend the Express server to support more advanced routing and error handling. Implement controllers and utility functions for better code structure.

- **Files**: `server.js`, `controllers/studentController.js`, `routes/studentRoutes.js`, `utils/fileHandler.js`
- **Usage**:

    ```bash
    node server.js
    ```

## Usage

To run the project, start the server (choose either the basic HTTP server or the Express server):

```bash
node server.js
```

You can access the following routes:
- `/`: Returns "Hello Holberton School!"
- `/students`: Returns a list of students from the `students.csv` file.

### Sample CSV Format (`students.csv`):

```csv
id,firstname,lastname,field
1,John,Doe,Engineering
2,Jane,Smith,Mathematics
```