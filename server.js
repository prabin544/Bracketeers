// Requiring necessary npm packages
const express = require("express");
// Requiring passport as we've configured it
const exphbs = require ("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
var session = require('express-session');
var mysql = require('mysql2');


if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  }else{
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "nodelogin"
  });
};

const db = require("./config/database");
//Test DB
db.authenticate()
    .then(() => console.log("Database connected......"))
    .catch(err => console.log("ERROR: " + err))
const app = express();
//Handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
//Body Parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
//set static foler
app.use(express.static(path.join(__dirname, "public")))
//Countires routes
app.use("/countries", require ("./routes/Countries"));
const PORT = process.env.PORT || 8081;
//app.get("/home", (req, res) => res.render("index", {defaultLayout: "landing"}));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/login.html'));
});

const signup = require("./routes/signup");
app.use("/signup.html", signup);


app.post('/auth', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
        connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
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
app.post('/register', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
        connection.query('INSERT INTO accounts SET ?', {username, password}, function(error, fields) {
            if (error) {
                throw error;
            }else{
                response.redirect('/');
            }       
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

app.post('/register', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('INSERT INTO accounts SET ?', {username, password}, function(error, fields) {
			if (error) {
				throw error;
			}else{
				response.redirect('/');
			}		
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.post('/register', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('INSERT INTO accounts SET ?', {username, password}, function(error, fields) {
			if (error) {
				throw error;
			}else{
				response.redirect('/');
			}		
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get("/home", (req, res) => res.render("index", {defaultLayout: "landing"}));
app.listen(PORT, console.log(`Visit http://localhost:%s/ in your browser${PORT}`));