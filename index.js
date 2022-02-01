const inquirer = require('inquirer');
const cTable = require('console.table');
const express = require('express');
const db = require('./db/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// // GET ALL EMPLOYEES
// app.get('/api/employee', (req, res) => {
//     const sql = `SELECT * FROM employee`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: rows
//         });
//     });
// });

// // SELECT ONE EMPLOYEE
// app.get('/api/employee/:id', (req, res) => {
//     const sql = `SELECT * FROM employee WHERE id = ?`;
//     const params = [req.params.id];
  
//     db.query(sql, params, (err, row) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: row
//       });
//     });
//   });

// // DELETE ONE
// app.delete('/api/employee/:id', (req, res) => {
//     const sql = `DELETE FROM employee WHERE id = ?`;
//     const params = [req.params.id];
  
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.statusMessage(400).json({ error: res.message });
//       } else if (!result.affectedRows) {
//         res.json({
//           message: 'Candidate not found'
//         });
//       } else {
//         res.json({
//           message: 'deleted',
//           changes: result.affectedRows,
//           id: req.params.id
//         });
//       }
//     });
//   });

// // CREATE ONE
// app.post('/api/employee', ({ body }, res) => {
//   const errors = inputCheck(body, 'first_name', 'last_name', 'role_id', 'manager_id');
//   if (errors) {
//     res.status(400).json({ error: errors });
//     return;
//   }
// });

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



const promptUser = () => {
    console.log(`
    *record scratch*
    `);
    inquirer.prompt([
        {
            type: 'list',
            name: 'mainQuestion',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add an Employee', 'Update an Employee', 'Remove an Employee', 'View All Positions', 'Add a position', 'Remove a Position', 'View all Departments', 'Add a Department', 'Remove a Department', 'Exit!']
        }
    ])
    .then((answers) => {
        const {choices} = answers;

        if (choices === 'View All Employees') {
            viewAllEmployees();
        }
        if (choices === 'Add an Employee') {
            addAnEmployee();
        }
        if (choices === 'Exit') {
            connection.end();
        }
        
    });
};


promptUser();

viewAllEmployees = () => {
    
}


db.query(`SELECT * FROM employee`, (err, rows) => {
    console.table(rows)
    // promptUser();
});