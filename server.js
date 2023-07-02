
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
