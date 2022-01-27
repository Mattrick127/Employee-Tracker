DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS position;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENET PRIMARY KEY,
    name VARCHAR(30),
    description TEXT
);

CREATE TABLE position (
    id INTEGER AUTO-INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL
    department_id INT
)

CREATE TABLE employee (
    id INTEGER AUTO-INCREMENT PRIMARY KEY,
    
)