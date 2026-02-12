// 1. setup a node app with command: npm init
// 2. install express with command: npm install express
// 3. create a file named server.js and add the following code

const express = require("express");
const app = express();
const port = 3000;

// https://www.npmjs.com/package/express-handlebars
const hbs = require("express-handlebars");

app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');

// the path module is used to work with file and directory paths
const path = require("path");

// serving static files
app.use(express.static(path.join(__dirname,"static")));

// generate routes
app.get("/homepage", (req, res) => {
    // sendFile is used to send a file as a response
    let filePath = path.join(__dirname, "static", "homepage.html");
    res.sendFile(filePath);
});

// rendering templates
app.get("/home", (req,res) => {
    res.render("home", {title: "My Website's Homepage"});
})

app.get("/about", (req, res) => {
    // sendFile is used to send a file as a response
    let filePath = path.join(__dirname, "static", "about.html");
    res.sendFile(filePath);
});

/*
app.get("/imafes/sample.jpg", (req, res) => {
    let filePath = path.join(__dirname, "static", "images", "sample.jpg")
});
*/

// HTTP METHODS GET POST PUT DELETE
// GET
app.get("/api/items", (req,res) => {
    res.send("this is a get response from /api/items");
})

// POST
app.post("/api/items", (req,res) => {
    res.send("this is a post response from /api/items");
})

// PUT
app.put("/api/items/:id", (req,res) => {
    res.send("this is a put response from /api/items/");
})

// DELETE
app.delete("/api/items/:id", (req,res) => {
    res.send("this is a delete response from /api/items");
})


// start the server
app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`);
});