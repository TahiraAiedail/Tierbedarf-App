const express = require('express');
const app = express();
const port = 4200;
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

// Middleware to parse JSON entities.
app.use(bodyParser.json());

// Middleware to parse urlencoded bodies.
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/dist/Tierbedarf-App')));  //TODO rename to your app-name

let db;

app.listen(4200, function() {    
    console.log("App listening on port 4200");
    db = new sqlite3.Database('./Datenbank.db', (err) => { 
        if (err) {
            console.error(err.message);
            console.log('Server error');
            process.exit(1); // If there's an error, exit the process with a failure code.
            return;
        }
        console.log('Connected to the SQLite database.');
    });
});


/* Inserts*/

app.post('/kunde', (req, res) => {
    const data = [req.body.Benutzername, req.body.Nachname, req.body.Vorname, req.body.Geburtsdatum, req.body.Telefonnummer, req.body.EMail, req.body.Passwort, req.body.Straße, req.body.Hausnummer, req.body.Stadt, req.body.PLZ];
    let sql = `INSERT INTO Kunde(Benutzername, Nachname, Vorname, Geburtsdatum, Telefonnummer, EMail, Passwort, Straße, Hausnummer, Stadt, PLZ) VALUES(?,?,?,?,?,?,?,?,?,?,?)`;
    db.run(sql, data, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", rowid: this.lastID });
        }
    });
});

app.post('/kundenzahlungsmethode', (req, res) => {
    const data = [req.body.KundenID, req.body.ZahlungsID];
    const sql = `INSERT INTO KundenZahlungsmethode(KundenID, ZahlungsID) VALUES(?,?)`;
    db.run(sql, data, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", rowid: this.lastID });
        }
    });
});

app.post('/event', (req, res) => {
    const data = [req.body.Datum, req.body.Name, req.body.Thema, req.body.Beschreibung];
    const sql = `INSERT INTO Event(Datum, Name, Thema, Beschreibung) VALUES(?,?,?,?)`;
    db.run(sql, data, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", rowid: this.lastID });
        }
    });
});

app.post('/mitarbeiter', (req, res) => {
    const data = [req.body.Nachname, req.body.Vorname, req.body.Geburtsdatum, req.body.Telefonnummer, req.body.EMail, req.body.Passwort, req.body.Straße, req.body.Hausnummer, req.body.Stadt, req.body.PLZ];
    const sql = `INSERT INTO Mitarbeiter(Nachname, Vorname, Geburtsdatum, Telefonnummer, EMail, Passwort, Straße, Hausnummer, Stadt, PLZ) VALUES(?,?,?,?,?,?,?,?,?,?)`;
    db.run(sql, data, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", rowid: this.lastID });
        }
    });
});

app.post('/eventteilnehmerliste', (req, res) => {
    const data = [req.body.KundenID, req.body.EventID];
    const sql = `INSERT INTO EventTeilnehmerliste(KundenID, EventID) VALUES(?,?)`;
    db.run(sql, data, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", rowid: this.lastID });
        }
    });
});

app.post('/eventleiterliste', (req, res) => {
    const data = [req.body.MitarbeiterID, req.body.EventID];
    const sql = `INSERT INTO Eventleiterliste(MitarbeiterID, EventID) VALUES(?,?)`;
    db.run(sql, data, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", rowid: this.lastID });
        }
    });
});

app.post('/tierheimtiere', (req, res) => {
    const data = [req.body.Name, req.body.Tierart, req.body.Rasse, req.body.Geschlecht, req.body.Geburtsdatum, req.body.Beschreibung];
    const sql = `INSERT INTO Tierheimtiere(Name, Tierart, Rasse, Geschlecht, Geburtsdatum, Beschreibung) VALUES(?,?,?,?,?,?)`;
    db.run(sql, data, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", rowid: this.lastID });
        }
    });
});

app.post('/tierfotos', (req, res) => {
    const data = [req.body.Tierfoto, req.body.TierID];
    const sql = `INSERT INTO Tierfotos(Tierfoto, TierID) VALUES(?,?)`;
    db.run(sql, data, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", rowid: this.lastID });
        }
    });
});

app.post('/kennenlerntermin', (req, res) => {
    const data = [req.body.Datum, req.body.KundenID, req.body.TierID, req.body.MitarbeiterID];
    const sql = `INSERT INTO Kennenlerntermin(Datum, KundenID, TierID, MitarbeiterID) VALUES(?,?,?,?)`;
    db.run(sql, data, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", rowid: this.lastID });
        }
    });
});

app.post('/waren', (req, res) => {
    const data = [req.body.Bezeichnung, req.body.Kategorie, req.body.Lagerbestand, req.body.Preis];
    const sql = `INSERT INTO Waren(Bezeichnung, Kategorie, Lagerbestand, Preis) VALUES(?,?,?,?)`;
    db.run(sql, data, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", rowid: this.lastID });
        }
    });
});

app.post('/warenfoto', (req, res) => {
    const data = [req.body.Warenfoto, req.body.WarenID];
    const sql = `INSERT INTO Warenfoto(Warenfoto, WarenID) VALUES(?,?)`;
    db.run(sql, data, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", rowid: this.lastID });
        }
    });
});

app.post('/bestellart', (req, res) => {
    const data = [req.body.Bestellart];
    const sql = `INSERT INTO Bestellart(Bestellart) VALUES(?)`;
    db.run(sql, data, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", rowid: this.lastID });
        }
    });
});

app.post('/bestellung', (req, res) => {
    const data = [req.body.Datum, req.body.BestellartID, req.body.MitarbeiterID, req.body.KundenID];
    const sql = `INSERT INTO Bestellung(Datum, BestellartID, MitarbeiterID, KundenID) VALUES(?,?,?,?)`;
    db.run(sql, data, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", rowid: this.lastID });
        }
    });
});

app.post('/warenkorb', (req, res) => {
    const data = [req.body.Warenmenge, req.body.WarenID, req.body.Bestellnummer];
    const sql = `INSERT INTO Warenkorb(Warenmenge, WarenID, Bestellnummer) VALUES(?,?,?)`;
    db.run(sql, data, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", rowid: this.lastID });
        }
    });
});

app.post('/rechnungsstatus', (req, res) => {
    const data = [req.body.Rechnungsstatus];
    const sql = `INSERT INTO Rechnungsstatus(Rechnungsstatus) VALUES(?)`;
    db.run(sql, data, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", rowid: this.lastID });
        }
    });
});

app.post('/rechnung', (req, res) => {
    const data = [req.body.Rechnungssumme, req.body.Rechnungsdatum, req.body.Bestellnummer, req.body.BezahltAm, req.body.RechnungsstatusID];
    const sql = `INSERT INTO Rechnung(Rechnungssumme, Rechnungsdatum, Bestellnummer, BezahltAm, RechnungsstatusID) VALUES(?,?,?,?,?)`;
    db.run(sql, data, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", rowid: this.lastID });
        }
    });
});

app.post('/nachbestellung', (req, res) => {
    const data = [req.body.Nachbestellungsnummer, req.body.Firma, req.body.Datum, req.body.MitarbeiterID];
    const sql = `INSERT INTO Nachbestellung(Nachbestellungsnummer, Firma, Datum, MitarbeiterID) VALUES(?,?,?,?)`;
    db.run(sql, data, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", rowid: this.lastID });
        }
    });
});

app.post('/nachbestellungskorb', (req, res) => {
    const data = [req.body.Warenmenge, req.body.WarenID, req.body.NachbestellungsID];
    const sql = `INSERT INTO Nachbestellungskorb(Warenmenge, WarenID, NachbestellungsID) VALUES(?,?,?)`;
    db.run(sql, data, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", rowid: this.lastID });
        }
    });
});

/* Select Statements*/

app.get('/kunde', (req, res) => {
    const sql = 'SELECT * FROM Kunde';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });
});

app.get('/kundenzahlungsmethode', (req, res) => {
    const sql = 'SELECT * FROM KundenZahlungsmethode';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });
});

app.get('/event', (req, res) => {
    const sql = 'SELECT * FROM Event';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });
});

app.get('/eventteilnehmerliste', (req, res) => {
    const sql = 'SELECT * FROM EventTeilnehmerliste';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });
});

app.get('/mitarbeiter', (req, res) => {
    const sql = 'SELECT * FROM Mitarbeiter';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });
});

app.get('/eventleiterliste', (req, res) => {
    const sql = 'SELECT * FROM Eventleiterliste';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });
});

app.get('/tierheimtiere', (req, res) => {
    const sql = 'SELECT * FROM Tierheimtiere';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });
});

app.get('/tierfotos', (req, res) => {
    const sql = 'SELECT * FROM Tierfotos';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });
});

app.get('/kennenlerntermin', (req, res) => {
    const sql = 'SELECT * FROM Kennenlerntermin';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });
});

app.get('/waren', (req, res) => {
    const sql = 'SELECT * FROM Waren';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });
});

app.get('/warenfoto', (req, res) => {
    const sql = 'SELECT * FROM Warenfoto';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });
});

app.get('/bestellart', (req, res) => {
    const sql = 'SELECT * FROM Bestellart';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });
});

app.get('/bestellung', (req, res) => {
    const sql = 'SELECT * FROM Bestellung';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });
});

app.get('/warenkorb', (req, res) => {
    const sql = 'SELECT * FROM Warenkorb';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });
});

app.get('/rechnungsstatus', (req, res) => {
    const sql = 'SELECT * FROM Rechnungsstatus';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });
});

app.get('/rechnung', (req, res) => {
    const sql = 'SELECT * FROM Rechnung';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });
});

app.get('/nachbestellung', (req, res) => {
    const sql = 'SELECT * FROM Nachbestellung';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });
});

app.get('/nachbestellungskorb', (req, res) => {
    const sql = 'SELECT * FROM Nachbestellungskorb';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });
});

/* Delete Statements */

app.delete('/kunde/:id', (req, res) => {
    const sql = 'DELETE FROM Kunde WHERE KundenID = ?';
    db.run(sql, req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", deletedID: req.params.id });
        }
    });
});

app.delete('/kundenzahlungsmethode/:id', (req, res) => {
    const sql = 'DELETE FROM KundenZahlungsmethode WHERE KundenZahlungsmethodeID = ?';
    db.run(sql, req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", deletedID: req.params.id });
        }
    });
});

app.delete('/event/:id', (req, res) => {
    const sql = 'DELETE FROM Event WHERE EventID = ?';
    db.run(sql, req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", deletedID: req.params.id });
        }
    });
});

app.delete('/eventteilnehmerliste/:id', (req, res) => {
    const sql = 'DELETE FROM EventTeilnehmerliste WHERE EventTeilnehmerID = ?';
    db.run(sql, req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", deletedID: req.params.id });
        }
    });
});

app.delete('/mitarbeiter/:id', (req, res) => {
    const sql = 'DELETE FROM Mitarbeiter WHERE MitarbeiterID = ?';
    db.run(sql, req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", deletedID: req.params.id });
        }
    });
});

app.delete('/eventleiterliste/:id', (req, res) => {
    const sql = 'DELETE FROM Eventleiterliste WHERE EventleiterID = ?';
    db.run(sql, req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", deletedID: req.params.id });
        }
    });
});

app.delete('/tierheimtiere/:id', (req, res) => {
    const sql = 'DELETE FROM Tierheimtiere WHERE TierID = ?';
    db.run(sql, req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", deletedID: req.params.id });
        }
    });
});

app.delete('/tierfotos/:id', (req, res) => {
    const sql = 'DELETE FROM Tierfotos WHERE TierfotoID = ?';
    db.run(sql, req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", deletedID: req.params.id });
        }
    });
});

app.delete('/kennenlerntermin/:id', (req, res) => {
    const sql = 'DELETE FROM Kennenlerntermin WHERE TerminID = ?';
    db.run(sql, req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", deletedID: req.params.id });
        }
    });
});

app.delete('/waren/:id', (req, res) => {
    const sql = 'DELETE FROM Waren WHERE WarenID = ?';
    db.run(sql, req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", deletedID: req.params.id });
        }
    });
});

app.delete('/warenfoto/:id', (req, res) => {
    const sql = 'DELETE FROM Warenfoto WHERE WarenfotoID = ?';
    db.run(sql, req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", deletedID: req.params.id });
        }
    });
});

app.delete('/bestellart/:id', (req, res) => {
    const sql = 'DELETE FROM Bestellart WHERE BestellartID = ?';
    db.run(sql, req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", deletedID: req.params.id });
        }
    });
});

app.delete('/bestellung/:id', (req, res) => {
    const sql = 'DELETE FROM Bestellung WHERE Bestellnummer = ?';
    db.run(sql, req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", deletedID: req.params.id });
        }
    });
});

app.delete('/warenkorb/:id', (req, res) => {
    const sql = 'DELETE FROM Warenkorb WHERE WarenkorbID = ?';
    db.run(sql, req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", deletedID: req.params.id });
        }
    });
});

app.delete('/rechnung/:id', (req, res) => {
    const sql = 'DELETE FROM Rechnung WHERE Rechnungsnummer = ?';
    db.run(sql, req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", deletedID: req.params.id });
        }
    });
});

app.delete('/nachbestellung/:id', (req, res) => {
    const sql = 'DELETE FROM Nachbestellung WHERE NachbestellungsID = ?';
    db.run(sql, req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", deletedID: req.params.id });
        }
    });
});

app.delete('/nachbestellungskorb/:id', (req, res) => {
    const sql = 'DELETE FROM Nachbestellungskorb WHERE NachbestellungskorbID = ?';
    db.run(sql, req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ message: "Success", deletedID: req.params.id });
        }
    });
});

