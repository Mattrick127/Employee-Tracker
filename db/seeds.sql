INSERT INTO department (department_name)
VALUES
    ('Stocker'),
    ('Customer Service'),
    ('Manager');

INSERT INTO position (title, salary, department_id)
VALUES
    ('Supervisor', 23000, 1 ),
    ('Keyholder', 20000, 2 ),
    ('Non-Keyholder', 18000, 3);
    
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Watt', 'Milson', 1, 1),
    ('Bandit', 'Rager', 2, 2),
    ('Mixmaster', 'Icepops', 3, 3),
    ('Leslie', 'Dominguez', 4, 4);
