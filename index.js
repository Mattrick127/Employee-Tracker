const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');



const prompt = () => {
    console.log(`
    *record scratch*
    `);
    inquirer.prompt([
        {
            type: 'rawlist',
            name: 'mainQuestion',
            message: 'WHAT?',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
        },
    ])
    .then((answers) => {
        const {choices} = answers;
        if (choices === 'View All Employees') {
            viewAllEmployees();
        }
    })
};

prompt();

const viewAllEmployees = () => {
    let mysql = 
    `SELECT employee.id
    employee.first_name,
    employee.last_name`
    prompt();
};

// const viewAllDepartments = () {

// }

// const viewAllRoles = () => {

// }