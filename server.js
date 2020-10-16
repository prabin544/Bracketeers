// Requiring necessary npm packages
const express = require("express");
// Requiring passport as we've configured it
const exphbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
var session = require('express-session');
var mysql = require('mysql2');


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    mysqlConnection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "pravin123",
        database: "nodelogin",
        multipleStatements: true
    });
};

mysqlConnection.connect((err) => {
    if (!err) {
        console.log('db passed !! connection is made');
    }
});

const app = express();
//Handlebars
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");
//Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//set static foler
app.use(express.static(path.join(__dirname, "public")))
//Countires routes
app.use("/countries", require("./routes/Countries"));
const PORT = process.env.PORT || 8090;
//app.get("/home", (req, res) => res.render("index", {defaultLayout: "landing"}));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/login.html'));
});

const signup = require("./routes/signup");
app.use("/signup.html", signup);


app.post('/auth', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
        mysqlConnection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/home');
            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});


app.post('/register', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
        mysqlConnection.query('INSERT INTO accounts SET ?', {
            username,
            password
        }, function (error, fields) {
            if (error) {
                throw error;
            } else {
                response.redirect('/');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

app.get("/home", (req, res) => res.render("index", {
    defaultLayout: "landing"
}));
app.listen(PORT, console.log(`Visit http://localhost:%s/ in your browser${PORT}`));

app.post('/addeast', (request, response) => {
    let req = request.body;
    console.log(req);
    var sql = "SET @ID = ? ; SET @Name = ?;\
    CALL RecordAdd(@ID, @Name);";
    mysqlConnection.query(sql, [11, req.Name],  (err, rows, fields) => {
        if (!err) {
            response.send(rows);
        }
    });
});

app.post('/addwest', (request, response) => {
    let req = request.body;
    console.log(req);
    var sql = "SET @ID = ? ; SET @Name = ?;\
    CALL RecordAdd(@Name);";
    mysqlConnection.query(sql, [0, req.Name],  (err, rows, fields) => {
        if (!err) {
            response.send(rows);
        }
    });
});