const connection = require('./db/connection');
const inquirer = require('inquirer');



const promptUser = () => {
    console.log(`
    *record scratch*
    `);
    inquirer.prompt([
        {
            type: 'rawlist',
            name: 'mainQuestion',
            message: 'WHAT?',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit!']
        },
    ])
    .then((answers) => {
        const {choices} = answers;
        if (choices === 'View All Employees') {
            viewAllEmployees();
        }
    })
};

promptUser();
 // View All Employees!

const viewAllEmployees = () => {
    let sql =
    `SELECT * FROM employees
    FROM employee, role, department`;

        
    prompt();
    };


// const viewAllDepartments = () {

// }

// const viewAllRoles = () => {

// }