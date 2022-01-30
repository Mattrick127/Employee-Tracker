INSERT INTO department (department_id, department_name)
VALUES
    (1, 'Stocker'),
    (2, 'Customer Service'),
    (3, 'Manager');

INSERT INTO position (position_id, title, salary, department_id)
VALUES
    (1, 'Supervisor', 23000, 1 ),
    (2, 'Keyholder', 20000, 2 ),
    (3, 'Non-Keyholder', 18000, 3);
    
INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES
    (1, 'Watt', 'Milson', 1, 1);
