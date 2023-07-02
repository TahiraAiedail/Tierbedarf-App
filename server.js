// set up

const express = require('express');
const http = require('http')
const app = express();
const port = 4200;
const path = require('path');
var mysql    = require('mysql'); 
const server = http.createServer(app)

bodyParser = require('body-parser');
 
 
 // support parsing of application/json type post data
 app.use(bodyParser.json());
 
 //support parsing of application/x-www-form-urlencoded post data
 app.use(bodyParser.urlencoded({ extended: true }));
 
  // configuration =================
 app.use(express.static(path.join(__dirname, '/dist/Tierbedarf-App')));  //TODO rename to your app-name
  
  // listen (start app with node server.js) ======================================
 server.listen(port, () => {    
      console.log('App listening on port ' + port)
 });

 //!!!! Da wir con hier einzelstehend erstellen, wird die Methode con.connect() nicht mehr benötigt, da die Verbindung schon hergestellt ist!!!
// Erzeugt ein Connection-Objekt, welches die Konfigurationsdaten für die Datenbankverbindung enthält
var con = mysql.createConnection({
    database: "23_IT_Gruppe1" ,
    host: "195.37.176.178",
    port: "20133",
    user: "23_IT_Grp_1",
    password: ")JrYRPeg1NSk45A0yi1H",
});

// !!!BEI JEDER SERVERVERÄNDERUNG BITTE VOR DEM TESTEN ng build Tierbedarf-App IM TERMINAL LAUFEN LASSEN!!!!
// APP STARTET JETZT IMMER AUF node server.js ANSTATT AUF ng serve. DAHER MUSS localhost:4200 EIGENSTÄNDIG IM BROWSER AUFGERUFEN WERDEN!!
// VPN VERBINDUNG FÜR DB IST: vpnsrv.hs-bremen.de

  // application -------------------------------------------------------------

/*
TESTSATZ ZUM VERSTEHEN
Bitte mit home.component.html und home.component.ts abgleichen
*/

app.get('/test', function(req,res) {
    console.log("Mytest");
    res.send({name:"Ich werde über den Konstruktor hier eingefügt! :)"});
  });

app.get('/tiere', (req, res) => {
    con.query("SELECT Name, Tierart FROM Tierheimtiere", 
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
})

/*
GET-ANFRAGEN
*/

/*app.get('/tierheimtiere', (req, res) => {
    con.query("SELECT * FROM Tierheimtiere",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
})*/

/* Inserts*/

app.post('/kunde', (req, res) => {
    const {Benutzername, Nachname, Vorname, Geburtsdatum, Telefonnummer, EMail, Passwort, Straße, Hausnummer, Stadt, PLZ} = req.body; // Extrahieren der Werte aus dem Request-Body
    con.query(`INSERT INTO Kunde(Benutzername, Nachname, Vorname, Geburtsdatum, Telefonnummer, EMail, Passwort, Straße, Hausnummer, Stadt, PLZ) VALUES(?,?,?,?,?,?,?,?,?,?,?)`,
    [Benutzername, Nachname, Vorname, Geburtsdatum, Telefonnummer, EMail, Passwort, Straße, Hausnummer, Stadt, PLZ], // Setze die Werte aus dem Rewuest-Body
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    });

app.post('/kundenzahlungsmethode', (req, res) => {
    const{KundenID, ZahlungsID} = req.body;
    con.query(`INSERT INTO KundenZahlungsmethode(KundenID, ZahlungsID) VALUES(?,?)`,
    [KundenID, ZahlungsID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    });

app.post('/event', (req, res) => {
    const {Datum, Name, Thema, Beschreibung} = req.body;
    con.query(`INSERT INTO Event(Datum, Name, Thema, Beschreibung) VALUES(?,?,?,?)`,
    [Datum, Name, Thema, Beschreibung],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    });

app.post('/mitarbeiter', (req, res) => {
    const {Nachname, Vorname, Geburtsdatum, Telefonnummer, EMail, Passwort, Straße, Hausnummer, Stadt, PLZ} = req.body;
    con.query(`INSERT INTO Mitarbeiter(Nachname, Vorname, Geburtsdatum, Telefonnummer, EMail, Passwort, Straße, Hausnummer, Stadt, PLZ) VALUES(?,?,?,?,?,?,?,?,?,?)`,
    [Nachname, Vorname, Geburtsdatum, Telefonnummer, EMail, Passwort, Straße, Hausnummer, Stadt, PLZ],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    });

app.post('/eventteilnehmerliste', (req, res) => {
    const {KundenID, EventID} = req.body;
    con.query(`INSERT INTO EventTeilnehmerliste(KundenID, EventID) VALUES(?,?)`,
    [KundenID, EventID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    });

app.post('/eventleiterliste', (req, res) => {
    const {MitarbeiterID, EventID} = req.body;
    con.query(`INSERT INTO Eventleiterliste(MitarbeiterID, EventID) VALUES(?,?)`,
    [MitarbeiterID, EventID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    });

app.post('/tierheimtiere', (req, res) => {
    const {Name, Tierart, Rasse, Geschlecht, Geburtsdatum, Beschreibung} = req.body; // Extrahieren der Werte aus dem Request-Body
    con.query(`INSERT INTO Tierheimtiere(Name, Tierart, Rasse, Geschlecht, Geburtsdatum, Beschreibung) VALUES(?,?,?,?,?,?)`,
    [Datum, KundenID, TierID, MitarbeiterID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    });
 

app.post('/tierfotos', (req, res) => {
    const {Tierfoto, TierID} = req.body;
    con.query(`INSERT INTO Tierfotos(Tierfoto, TierID) VALUES(?,?)`,
    [Tierfoto, TierID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    });

app.post('/kennenlerntermin', (req, res) => {
    const {Datum, KundenID, TierID, MitarbeiterID} = req.body; // Extrahieren der Werte aus dem Request-Body
    con.query(`INSERT INTO Kennenlerntermin(Datum, KundenID, TierID, MitarbeiterID) VALUES(?,?,?,?)`,
    [Datum, KundenID, TierID, MitarbeiterID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    });

app.post('/waren', (req, res) => {
    const {Bezeichnung, Kategorie, Lagerbestand, Preis} = req.body;
    con.query(`INSERT INTO Waren(Bezeichnung, Kategorie, Lagerbestand, Preis) VALUES(?,?,?,?)`,
    [Bezeichnung, Kategorie, Lagerbestand, Preis],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    });

app.post('/warenfoto', (req, res) => {
    const {Warenfoto, WarenID} = req.body;
    con.query(`INSERT INTO Warenfoto(Warenfoto, WarenID) VALUES(?,?)`,
    [Warenfoto, WarenID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    });

app.post('/bestellart', (req, res) => {
    const {Bestellart} = req.body;
    con.query(`INSERT INTO Bestellart(Bestellart) VALUES(?)`,
    [Bestellart],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    });

app.post('/bestellung', (req, res) => {
    const {Datum, BestellartID, MitarbeiterID, KundenID} = req.body;
    con.query(`INSERT INTO Bestellung(Datum, BestellartID, MitarbeiterID, KundenID) VALUES(?,?,?,?)`,
    [Datum, BestellartID, MitarbeiterID, KundenID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    });

app.post('/warenkorb', (req, res) => {
    const {Warenmenge, WarenID, Bestellnummer} = req.body;
    con.query(`INSERT INTO Warenkorb(Warenmenge, WarenID, Bestellnummer) VALUES(?,?,?)`,
    [Warenmenge, WarenID, Bestellnummer],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    });

app.post('/rechnungsstatus', (req, res) => {
    const {Rechnungsstatus} = req.body;
    con.query(`INSERT INTO Rechnungsstatus(Rechnungsstatus) VALUES(?)`,
    [Rechnungsstatus],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    });

app.post('/rechnung', (req, res) => {
    const {Rechnungssumme, Rechnungsdatum, Bestellnummer, BezahltAm, RechnungsstatusID} = req.body;
    con.query(`INSERT INTO Rechnung(Rechnungssumme, Rechnungsdatum, Bestellnummer, BezahltAm, RechnungsstatusID) VALUES(?,?,?,?,?)`,
    [Rechnungssumme, Rechnungsdatum, Bestellnummer, BezahltAm, RechnungsstatusID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    });

app.post('/nachbestellung', (req, res) => {
    const {Nachbestellungsnummer, Firma, Datum, MitarbeiterID} = reg.body;
    con.query(`INSERT INTO Nachbestellung(Nachbestellungsnummer, Firma, Datum, MitarbeiterID) VALUES(?,?,?,?)`,
    [Nachbestellungsnummer, Firma, Datum, MitarbeiterID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    });

app.post('/nachbestellungskorb', (req, res) => {
    const {Warenmenge, WarenID, NachbestellungsID} = req.body;
    con.query(`INSERT INTO Nachbestellungskorb(Warenmenge, WarenID, NachbestellungsID) VALUES(?,?,?)`,
    [Warenmenge, WarenID, NachbestellungsID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    });

/* Select Statements*/

app.get('/kunde', (req, res) => {
    con.query("SELECT * FROM Kunde",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.get('/kundenzahlungsmethode', (req, res) => {
    con.query("SELECT * FROM KundenZahlungsmethode",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.get('/event', (req, res) => {
    con.query("SELECT * FROM Event",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.get('/eventteilnehmerliste', (req, res) => {
    con.query("SELECT * FROM EventTeilnehmerliste",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.get('/mitarbeiter', (req, res) => {
    con.query("SELECT * FROM Mitarbeiter",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.get('/eventleiterliste', (req, res) => {
    con.query("SELECT * FROM Eventleiterliste",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});


app.get('/tierheimtiere', (req, res) => {
    con.query("SELECT * FROM Tierheimtiere",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.get('/tierfotos', (req, res) => {
    con.query("SELECT * FROM Tierfotos",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.get('/kennenlerntermin', (req, res) => {
    con.query("SELECT * FROM Kennenlerntermin",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.get('/waren', (req, res) => {
    con.query("SELECT * FROM Waren",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.get('/warenfoto', (req, res) => {
    con.query("SELECT * FROM Warenfoto",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.get('/bestellart', (req, res) => {
    con.query("SELECT * FROM Bestellart",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});


app.get('/bestellung', (req, res) => {
    con.query("SELECT * FROM Bestellung",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.get('/warenkorb', (req, res) => {
    con.query("SELECT * FROM Warenkorb",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.get('/rechnungsstatus', (req, res) => {
    con.query("SELECT * FROM Rechnungsstatus",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.get('/rechnung', (req, res) => {
    con.query("SELECT * FROM Rechnung",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.get('/nachbestellung', (req, res) => {
    con.query("SELECT * FROM Nachbestellung",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.get('/nachbestellungskorb', (req, res) => {
    con.query("SELECT * FROM Nachbestellungskorb",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.get('/mitarbeitermitwenigstenkennenlernterminen', (req, res) => {
    con.query("SELECT MitarbeiterID FROM Mitarbeiter ORDER BY (SELECT COUNT(*) FROM Kennenlerntermin WHERE Mitarbeiter.MitarbeiterID = Kennenlerntermin.MitarbeiterID) ASC LIMIT 1",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});


/* Delete Statements */

app.delete('/kunde/:id', (req, res) => {
    con.query('DELETE FROM Kunde WHERE KundenID = ?',
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.delete('/kundenzahlungsmethode/:id', (req, res) => {
    con.query('DELETE FROM KundenZahlungsmethode WHERE KundenZahlungsmethodeID = ?',
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.delete('/event/:id', (req, res) => {
    con.query('DELETE FROM Event WHERE EventID = ?',
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.delete('/eventteilnehmerliste/:id', (req, res) => {
    con.query('DELETE FROM EventTeilnehmerliste WHERE EventTeilnehmerID = ?',
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.delete('/mitarbeiter/:id', (req, res) => {
    con.query('DELETE FROM Mitarbeiter WHERE MitarbeiterID = ?',
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.delete('/eventleiterliste/:id', (req, res) => {
    con.query('DELETE FROM Eventleiterliste WHERE EventleiterID = ?',
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.delete('/tierheimtiere/:id', (req, res) => {
    con.query('DELETE FROM Tierheimtiere WHERE TierID = ?',
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.delete('/tierfotos/:id', (req, res) => {
    con.query('DELETE FROM Tierfotos WHERE TierfotoID = ?',
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.delete('/kennenlerntermin/:id', (req, res) => {
    con.query('DELETE FROM Kennenlerntermin WHERE TerminID = ?',
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.delete('/waren/:id', (req, res) => {
    con.query('DELETE FROM Waren WHERE WarenID = ?',
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.delete('/warenfoto/:id', (req, res) => {
    con.query('DELETE FROM Warenfoto WHERE WarenfotoID = ?',
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.delete('/bestellart/:id', (req, res) => {
    con.query('DELETE FROM Bestellart WHERE BestellartID = ?',
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.delete('/bestellung/:id', (req, res) => {
    con.query('DELETE FROM Bestellung WHERE Bestellnummer = ?',
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.delete('/warenkorb/:id', (req, res) => {
    con.query('DELETE FROM Warenkorb WHERE WarenkorbID = ?',
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.delete('/rechnung/:id', (req, res) => {
    con.query('DELETE FROM Rechnung WHERE Rechnungsnummer = ?',
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.delete('/nachbestellung/:id', (req, res) => {
    con.query('DELETE FROM Nachbestellung WHERE NachbestellungsID = ?',
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.delete('/nachbestellungskorb/:id', (req, res) => {
    con.query('DELETE FROM Nachbestellungskorb WHERE NachbestellungskorbID = ?',
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});
