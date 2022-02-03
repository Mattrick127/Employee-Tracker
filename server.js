const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);

app.use((req, res) => {
    res.status(404).end();
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
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

const viewAllEmployees = () => {
    db.query(`SELECT * FROM employee`, (err, rows) => {
        console.table(rows)
    });
    promptUser();
};


// db.query(`SELECT * FROM employee`, (err, rows) => {
//     console.table(rows)
//     promptUser();
// });