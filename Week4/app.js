// initialize express application
const express = require('express')
const app = express()
const port = 2000

// basic get request handler (routes) 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
  res.send('This is the about page')
})

app.post('/', (req, res) => {
  res.send('This is a post request to the about page')
})

app.put('/', (req, res) => {
  res.send('This is a put request to the about page')
})

app.delete('/', (req, res) => {
  res.send('This is a delete request to the about page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
