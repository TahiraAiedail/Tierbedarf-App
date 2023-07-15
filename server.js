// set up

const express = require('express');
const http = require('http')
const app = express();
const port = 4200;
const path = require('path');
var mysql    = require('mysql'); 
const e = require('express');
const server = http.createServer(app)

app.use(express.json());


app.post('/api/endpoint', (req, res) => {
    // Extrahiere die Daten aus dem Request-Body
    const { Benutzername, Nachname, Vorname, sqlGeburtsdatum, Telefonnummer, EMail, Passwort, Straße, Hausnummer, Stadt, PLZ } = req.body;
  
    // Erstelle eine SQL-Abfrage zum Einfügen der Daten
    const query = `INSERT INTO Kunde (Benutzername, Nachname, Vorname, sqlGeburtsdatum, Telefonnummer, EMail, Passwort, Straße, Hausnummer, Stadt, PLZ) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
    const values = [Benutzername, Nachname, Vorname, sqlGeburtsdatum, Telefonnummer, EMail, Passwort, Straße, Hausnummer, Stadt, PLZ];
  
    // Führe die SQL-Abfrage aus
    connection.query(query, values, (err, result) => {
      if (err) {
        console.error('Fehler beim Einfügen der Daten in die MySQL-Datenbank:', err);
        res.status(500).json({ message: 'Interner Serverfehler' });
        return;
      }
      res.status(200).json({ message: 'Daten erfolgreich gespeichert' });
    });
  });

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



/* Inserts*/

app.post('/kunde', (req, res) => {
    const {Benutzername, Nachname, Vorname, Geburtsdatum, Telefonnummer, EMail, Passwort, Straße, Hausnummer, Stadt, PLZ} = req.body; // Extrahieren der Werte aus dem Request-Body
    con.query(`INSERT INTO Kunde(Benutzername, Nachname, Vorname, Geburtsdatum, Telefonnummer, EMail, Passwort, Straße, Hausnummer, Stadt, PLZ) VALUES(?,?,?,?,?,?,?,?,?,?,?)`,
    [Benutzername, Nachname, Vorname, Geburtsdatum, Telefonnummer, EMail, Passwort, Straße, Hausnummer, Stadt, PLZ], // Setze die Werte aus dem Rewuest-Body
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
        res.send(results);
    });
    });

app.post('/kundenzahlungsmethode', (req, res) => {
    const{KundenID, ZahlungsID} = req.body;
    con.query(`INSERT INTO KundenZahlungsmethode(KundenID, ZahlungsID) VALUES(?,?)`,
    [KundenID, ZahlungsID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
        res.send(results);

    });
    });

app.post('/event', (req, res) => {
    const {Datum, Name, Thema, Beschreibung} = req.body;
    con.query(`INSERT INTO Event(Datum, Name, Thema, Beschreibung) VALUES(?,?,?,?)`,
    [Datum, Name, Thema, Beschreibung],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
        res.send(results);

    });
    });

app.post('/mitarbeiter', (req, res) => {
    const {Nachname, Vorname, Geburtsdatum, Telefonnummer, EMail, Passwort, Straße, Hausnummer, Stadt, PLZ} = req.body;
    con.query(`INSERT INTO Mitarbeiter(Nachname, Vorname, Geburtsdatum, Telefonnummer, EMail, Passwort, Straße, Hausnummer, Stadt, PLZ) VALUES(?,?,?,?,?,?,?,?,?,?)`,
    [Nachname, Vorname, Geburtsdatum, Telefonnummer, EMail, Passwort, Straße, Hausnummer, Stadt, PLZ],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
        res.send(results);
    });
    });

app.post('/eventteilnehmerliste', (req, res) => {
    const {KundenID, EventID} = req.body;
    con.query(`INSERT INTO EventTeilnehmerliste(KundenID, EventID) VALUES(?,?)`,
    [KundenID, EventID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
        res.send(results);

    });
    });

app.post('/eventleiterliste', (req, res) => {
    const {MitarbeiterID, EventID} = req.body;
    con.query(`INSERT INTO Eventleiterliste(MitarbeiterID, EventID) VALUES(?,?)`,
    [MitarbeiterID, EventID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
        res.send(results);
    });
    });

app.post('/tierheimtiere', (req, res) => {
    const {Name, Tierart, Rasse, Geschlecht, Geburtsdatum, Beschreibung} = req.body; // Extrahieren der Werte aus dem Request-Body
    con.query(`INSERT INTO Tierheimtiere(Name, Tierart, Rasse, Geschlecht, Geburtsdatum, Beschreibung) VALUES(?,?,?,?,?,?)`,
    [Datum, KundenID, TierID, MitarbeiterID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
        res.send(results);
    });
    });
 

app.post('/tierfotos', (req, res) => {
    const {Tierfoto, TierID} = req.body;
    con.query(`INSERT INTO Tierfotos(Tierfoto, TierID) VALUES(?,?)`,
    [Tierfoto, TierID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
        res.send(results);

    });
    });

app.post('/kennenlerntermin', (req, res) => {
    const {Datum, KundenID, TierID, MitarbeiterID} = req.body; // Extrahieren der Werte aus dem Request-Body
    con.query(`INSERT INTO Kennenlerntermin(Datum, KundenID, TierID, MitarbeiterID) VALUES(?,?,?,?)`,
    [Datum, KundenID, TierID, MitarbeiterID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
        res.send(results);
    });
    });

app.post('/waren', (req, res) => {
    const {Bezeichnung, Kategorie, Lagerbestand, Preis} = req.body;
    con.query(`INSERT INTO Waren(Bezeichnung, Kategorie, Lagerbestand, Preis) VALUES(?,?,?,?)`,
    [Bezeichnung, Kategorie, Lagerbestand, Preis],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
        res.send(results);
    });
    });

app.post('/warenfoto', (req, res) => {
    const {Warenfoto, WarenID} = req.body;
    con.query(`INSERT INTO Warenfoto(Warenfoto, WarenID) VALUES(?,?)`,
    [Warenfoto, WarenID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
        res.send(results);

    });
    });

app.post('/bestellart', (req, res) => {
    const {Bestellart} = req.body;
    con.query(`INSERT INTO Bestellart(Bestellart) VALUES(?)`,
    [Bestellart],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
        res.send(results);
    });
    });

/*app.post('/bestellung', (req, res) => {
    const {Datum, BestellartID, MitarbeiterID, KundenID} = req.body;
    con.query(`INSERT INTO Bestellung(Datum, BestellartID, MitarbeiterID, KundenID) VALUES(?,?,?,?)`,
    [Datum, BestellartID, MitarbeiterID, KundenID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
        res.send(results);
    });
    });*/

app.post('/warenkorb', (req, res) => {
    const {Warenmenge, WarenID, Bestellnummer} = req.body;
    con.query(`INSERT INTO Warenkorb(Warenmenge, WarenID, Bestellnummer) VALUES(?,?,?)`,
    [Warenmenge, WarenID, Bestellnummer],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
        res.send(results);
    });
    });

app.post('/rechnungsstatus', (req, res) => {
    const {Rechnungsstatus} = req.body;
    con.query(`INSERT INTO Rechnungsstatus(Rechnungsstatus) VALUES(?)`,
    [Rechnungsstatus],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
        res.send(results);
    });
    });

app.post('/rechnung', (req, res) => {
    const {Rechnungssumme, Rechnungsdatum, Bestellnummer, BezahltAm, RechnungsstatusID} = req.body;
    con.query(`INSERT INTO Rechnung(Rechnungssumme, Rechnungsdatum, Bestellnummer, BezahltAm, RechnungsstatusID) VALUES(?,?,?,?,?)`,
    [Rechnungssumme, Rechnungsdatum, Bestellnummer, BezahltAm, RechnungsstatusID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
        res.send(results);

    });
    });

app.post('/nachbestellung', (req, res) => {
    const {Nachbestellungsnummer, Firma, Datum, MitarbeiterID} = reg.body;
    con.query(`INSERT INTO Nachbestellung(Nachbestellungsnummer, Firma, Datum, MitarbeiterID) VALUES(?,?,?,?)`,
    [Nachbestellungsnummer, Firma, Datum, MitarbeiterID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
        res.send(results);
    });
    });

app.post('/nachbestellungskorb', (req, res) => {
    const {Warenmenge, WarenID, NachbestellungsID} = req.body;
    con.query(`INSERT INTO Nachbestellungskorb(Warenmenge, WarenID, NachbestellungsID) VALUES(?,?,?)`,
    [Warenmenge, WarenID, NachbestellungsID],
    function(error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
        res.send(results);
    });
    });
    
    app.post('/loginKunde', (req, res) => {
        const { email, password } = req.body; 
        const kundeQuery = 'SELECT * FROM Kunde WHERE EMail = ? AND Passwort = ?';
        const mitarbeiterQuery = 'SELECT * FROM Mitarbeiter WHERE EMail = ? AND Passwort = ?';
      
        con.query(kundeQuery, [email, password], function(kundeError, kundeResults) {
          if (kundeError) throw kundeError;
      
          if (kundeResults.length > 0) {
            // Benutzer als Kunde gefunden
            const user = kundeResults[0];
            res.send({ status: 'success', message: 'Login erfolgreich als Kunde', data: user });
          } else {
            // Benutzer als Kunde nicht gefunden, nach Mitarbeiter suchen
            con.query(mitarbeiterQuery, [email, password], function(mitarbeiterError, mitarbeiterResults) {
              if (mitarbeiterError) throw mitarbeiterError;
      
              if (mitarbeiterResults.length > 0) {
                // Benutzer als Mitarbeiter gefunden
                const user = mitarbeiterResults[0];
                res.send({ status: 'success', message: 'Login erfolgreich als Mitarbeiter', data: user });
              } else {
                // Kein Benutzer gefunden
                res.send({ status: 'fail', message: 'E-Mail oder Passwort nicht korrekt' });
              }
            });
          }
        });
      });
      
      app.post('/benutzername', (req, res) => {
        const { Benutzername } = req.body;
      
        con.query('SELECT COUNT(*) AS count FROM Kunde WHERE Benutzername = ?', [Benutzername], (error, results, fields) => {
          if (error) {
            throw error;
          }
      
          const count = results[0].count;
          if (count > 0) {
            res.status(200).json({ available: false });
          } else {
            res.status(200).json({ available: true });
          }
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

app.get('/nextevent', (req, res) => {
    con.query("SELECT * FROM Event WHERE Datum >= CURDATE() ORDER BY Datum ASC LIMIT 1",
      function(error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.send(results);
      }
    );
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

app.get('/kunde/:kundenid/events', (req, res) => {
    const kundenid = req.params.kundenid;
    con.query(
      'SELECT Event.EventID, Event.Datum, Event.Name, Event.Thema, Event.Beschreibung FROM EventTeilnehmerliste JOIN Event ON EventTeilnehmerliste.EventID = Event.EventID WHERE EventTeilnehmerliste.KundenID = ?',
      [kundenid],
      function(error, results, fields) {
        if (error) throw error;
        res.send(results);
      }
    );
  });
  

app.get('/tierheimtiere', (req, res) => {
    con.query("SELECT * FROM Tierheimtiere",
    function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
})

app.get('/letztestierheimtier', (req, res) => {
    con.query("SELECT * FROM Tierheimtiere ORDER BY TierID DESC LIMIT 1",
      function(error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.send(results);
      }
    );
  });
  
app.get('/kundendaten', (req, res) => {
    con.query("SELECT KundenID, Vorname, Nachname, Geburtsdatum, " + 
    "\"E-Mail-Adresse\", Straße, Hausnummer, Stadt, PLZ FROM Kunde;", 
    function(error, results, fields) {
        if(error) throw error;
        res.send(results);
    })
})

app.get('/mitarbeiterdaten', (req, res) => {
    con.query("SELECT MitarbeiterID, Vorname, Nachname, Geburtsdatum, " + 
    "Telefonnummer, \"E-Mail-Adresse\", Straße, Hausnummer, Stadt, PLZ FROM Mitarbeiter;", 
    function(error, results, fields) {
        if(error) throw error;
        res.send(results);
    })
})

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

app.get('/rechnungkundeuebersicht', (req, res) => {
    const kundenID = req.query.kundenID; // Kunden-ID aus dem Anfrageparameter abrufen
  
    con.query('SELECT Rechnungssumme, Rechnungsnummer, Rechnungsdatum FROM Rechnung WHERE KundenID = ?', [kundenID], (error, results, fields) => {
      if (error) {
        throw error;
      }
      console.log(results);
      res.send(results);
    });
  });

  app.get('/events/:eventid/teilnehmer', (req, res) => {
    const eventid = req.params.eventid;
    con.query(
      'SELECT Kunde.KundenID, Kunde.Nachname, Kunde.Vorname, Kunde.Email ' +
      'FROM Kunde ' +
      'INNER JOIN EventTeilnehmerliste ON Kunde.KundenID = EventTeilnehmerliste.KundenID ' +
      'WHERE EventTeilnehmerliste.EventID = ?',
      [eventid],
      function(error, results, fields) {
        if (error) throw error;
        res.send(results);
      }
    );
  });

  app.get('/events/before', (req, res) => {
    const currentDate = new Date();
    
    con.query(
      'SELECT * FROM Event WHERE Datum > ?',
      [currentDate],
      function(error, results, fields) {
        if (error) throw error;
        res.send(results);
      }
    );
  });
  
  

  app.get('/rechnungkundedetails/:rechnungsnummer', (req, res) => {
    const rechnungsnummer = req.params.rechnungsnummer;
  
    con.query('SELECT * FROM Rechnung WHERE Rechnungsnummer = ?', [rechnungsnummer], (error, results, fields) => {
      if (error) {
        throw error;
      }
      console.log(results);
      res.send(results);
    });
  });
  
app.get('/mitarbeitermitwenigstenkennenlernterminen', (req, res) => {
  
    con.query('SELECT MitarbeiterID FROM Mitarbeiter ORDER BY (SELECT COUNT(*) FROM Kennenlerntermin WHERE Mitarbeiter.MitarbeiterID = Kennenlerntermin.MitarbeiterID) ASC LIMIT 1',
      function (error, results, fields) {
      if (error) throw error;

      console.log(results);
      
  
      if (results.length > 0) {
        const employee = results[0];
        const response = {
          MitarbeiterID: employee.MitarbeiterID
        };
        res.json(response); 
      } else {
        res.sendStatus(404); 
      }
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

})


/* Update */


app.put('/kunde/:kundenid', (req, res) => {
    const kundenid = req.params.kundenid;
    const {Nachname, Vorname,Telefonnummer, Straße, Hausnummer, Stadt, PLZ } = req.body;
    con.query(
      'UPDATE Kunde SET Nachname = ?, Vorname = ?, Telefonnummer = ?, Straße = ?, Hausnummer = ?, Stadt = ?, PLZ = ? WHERE KundenID = ?',
      [Nachname, Vorname,Telefonnummer, Straße, Hausnummer, Stadt, PLZ, kundenid],
      function(error, results, fields) {
        if (error) throw error;
        console.log(results.affectedRows);
        res.send(results);
      }
    );
  });

  app.put('/kunde/:kundenid/passwort', (req, res) => {
    const kundenid = req.params.kundenid;
    const { Passwort } = req.body;
    con.query(
      'UPDATE Kunde SET Passwort = ? WHERE KundenID = ?',
      [Passwort, kundenid],
      function(error, results, fields) {
        if (error) throw error;
        console.log(results.affectedRows);
        res.send(results);
      }
    );
  });

  app.put('/mitarbeiter/:mitarbeiterid', (req, res) => {
    const mitarbeiterid = req.params.mitarbeiterid;
    const { Nachname, Vorname, Telefonnummer, Straße, Hausnummer, Stadt, PLZ } = req.body;
    con.query(
      'UPDATE Mitarbeiter SET Nachname = ?, Vorname = ?, Telefonnummer = ?, Straße = ?, Hausnummer = ?, Stadt = ?, PLZ = ? WHERE MitarbeiterID = ?',
      [Nachname, Vorname, Telefonnummer, Straße, Hausnummer, Stadt, PLZ, mitarbeiterid],
      function(error, results, fields) {
        if (error) throw error;
        console.log(results.affectedRows);
        res.send(results);
      }
    );
  });
  
  app.put('/mitarbeiter/:mitarbeiterid/passwort', (req, res) => {
    const mitarbeiterid = req.params.mitarbeiterid;
    const { Passwort } = req.body;
    con.query(
      'UPDATE Mitarbeiter SET Passwort = ? WHERE MitarbeiterID = ?',
      [Passwort, mitarbeiterid],
      function(error, results, fields) {
        if (error) throw error;
        console.log(results.affectedRows);
        res.send(results);
      }
    );
  });
  
 // Route zum Erstellen einer Bestellung
 app.post('/api/bestellung', (req, res) => {
    const zahlungsart = req.body.zahlungsart;
    const warenkorb = req.body.warenkorb;
    const datum = req.body.datum; // Datum aus dem Request Body entnehmen
  
    // Weitere Verarbeitung der Bestellung, z. B. Speichern in der Datenbank
    // Generierung der Bestellungsnummer, etc.
  
    // Beispiel: Einfügen der Bestellung in die Datenbank und Rückgabe der Bestellungsnummer
    const query = 'INSERT INTO Bestellung (Datum, BestellartID, MitarbeiterID, KundenID, Zahlungsart) VALUES (?, ?, ?, ?, ?)';
    const values = [datum, null, null, null, null]; // Platzhalterwerte für BestellartID, MitarbeiterID und KundenID
  
    connection.query(query, values, (error, results) => {
      if (error) {
        console.error('Fehler beim Speichern der Bestellung:', error);
        res.status(500).json({ error: 'Fehler beim Speichern der Bestellung' });
      } else {
        const bestellungsnummer = results.insertId;
        res.status(200).json(bestellungsnummer);
      }
    });
  });