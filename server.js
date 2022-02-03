const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    promptUser();
});

const promptUser = () => {
    console.log(`
    *record scratch*
    `);
    inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'View All Positions', 'View All Departments', 'View All Employees by Department', 'Add an Employee', 'Update an Employee', 'Remove an Employee', 'Add a position', 'Remove a Position', 'Add a Department', 'Remove a Department', 'Exit!']
        }
    ])
    .then((answers) => {
        const {choices} = answers;

        if (choices === 'View All Employees') {
            viewAllEmployees();
        }
        if (choices === 'View All Departments') {
            viewAllDepartments();
        }
        if (choices === 'Add an Employee') {
            addAnEmployee();
        }
        if (choices === 'Exit') {
            connection.end();
        }
        
    });
};


const viewAllEmployees = () => {
    db.query(`SELECT * FROM employee`, (err, rows) => {
        console.table(rows)
    });
    promptUser();
};

const viewAllDepartments = () => {
    db.query(`SELECT * FROM department`, (err, rows) => {
        console.table(rows)
    });
    promptUser();
};
// db.query(`SELECT * FROM employee`, (err, rows) => {
//     console.table(rows)
//     promptUser();
// });