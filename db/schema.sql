DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS positions;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENET PRIMARY KEY,
    name VARCHAR(30),
    description TEXT
);

CREATE TABLE positions (
    id INTEGER AUTO-INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL
    department_id INT
)

CREATE TABLE employees (
    id INTEGER AUTO-INCREMENT PRIMARY KEY,
    
)