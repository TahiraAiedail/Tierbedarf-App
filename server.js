const express = require('express');
const app = express();
const port = 4200;
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

// Middleware to parse JSON entities.
app.use(bodyParser.json());

// Middleware to parse urlencoded bodies.
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    let db = new sqlite3.Database('./Datenbank.db', (err) => { 
        if (err) {
            console.error(err.message);
            res.status(500).send('Server error');
            return;
        }
        console.log('Connected to the SQLite database.');
    });

    let sql = 'SELECT Name, Tierart FROM Tierheimtiere';
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Server error');
            return;
        }
        res.json(rows);
    });

    db.close((err) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log('Closed the database connection.');
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
