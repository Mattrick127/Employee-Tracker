const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');

const prompt = () => {
    console.log(`
    YO SHIGGA BOOM
    `);
    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'mainQuestion',
            message: 'SHIKA WHAT?',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
        },
    ]);
};

prompt();