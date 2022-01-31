const connection = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

connection.connect((error) => {
    if (error) throw error;
    promptUser();
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
        if (choices === 'Exit') {
            connection.end();
        }
        
    });
};

 // View All Employees!

const viewAllEmployees = () => {
    let sql =   `SELECT * FROM employee`;

    connection.promise().query(sql, (error, response) => {
        if (error) throw error;
        console.table(response);
        promptUser();
    });
};

// const viewAllDepartments = () {

// }

// const viewAllRoles = () => {

// }