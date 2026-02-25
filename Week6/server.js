// 1. setup a node app with command: npm init
// 2. install express with command: npm install express
// 3. create a file named server.js and add the following code

const express = require("express");
const app = express();
const port = 3000;

// https://www.npmjs.com/package/express-handlebars is a Handlebars view engine for Express
const hbs = require("express-handlebars");

// the path module is used to work with file and directory paths
const path = require("path");

// handlebars setup
app.engine("handlebars", hbs.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));


// Serving static files
app.use(express.static(path.join(__dirname, "static")));

// data
let directory = require("./data/directory.json");
console.log(directory);

// EXISTING ROUTES
    // generate routes
// home page static HTML
app.get("/", (req, res) => {
  // sendFile is used to send a file as a response
  let filePath = path.join(__dirname, "static", "homepage.html");
  res.sendFile(filePath);
});

// rendering templates
// home handlebars page
app.get("/home", (req, res) => {
  res.render("home", { title: "My Website's homepage" });
});

// about page 
app.get("/about", (req, res) => {
  // sendFile is used to send a file as a response
  let filePath = path.join(__dirname, "static", "about.html");
  res.sendFile(filePath);
});

// example image route
app.get("/images/sample.jpg", (req, res) => {
  let filePath = path.join(__dirname, "static", "images", "sample.jpg");
  res.sendFile(filePath);
});

// HTTP METHODS GET POST PUT DELETE
app.get("/api/items", (req, res) => {
  res.send("this is a get response from /api/items");
});

app.post("/api/items", (req, res) => {
  res.send("this is a post response from /api/items");
});

app.put("/api/items/:id", (req, res) => {
  res.send(`this is a put response from /api/items/`);
});

app.delete("/api/items/:id", (req, res) => {
  res.send(`this is a delete response from /api/items/`);
});

//------------------------------
// Directory ASSIGNMENT ROUTES
//------------------------------
// A: list page: GET /directory
// Renders the directory.handlebars view
// The view expects: { people: [...] }
app.get("/directory", (req, res) => {
  res.render("directory", { people: directory });
});

// B) DETAILS PAGE: GET /directory/:id
// Uses a *route parameter* (req.params.id)
// The view expects: { person: {...} }
app.get('/directory/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = directory.find(p => p.id === id);

  res.render('person', { person });
});

// C) RUNTIME ADD: GET /person/add
// Uses *query parameters* (req.query)
// Adds to directory array in memory only (does not write to JSON file)
app.get('/person/add', (req, res) => {

  // Add person to memory
  
  directory.push({
    id: parseInt(req.query.id),
    first_name: req.query.first_name,
    last_name: req.query.last_name,
    email: req.query.email,
    address: req.query.address,
    city: req.query.city,
    state: req.query.state,
    zip: req.query.zip,
  })

});


// start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});