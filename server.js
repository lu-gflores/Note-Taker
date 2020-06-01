const express= require('express');
const fs = require('fs');
const path = require('path')
const app = express();
const PORT = 8080;

//serve static files in public folder
app.use(express.static('public'));

//handles data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//read db.json and return all saved notes as JSON
app.get('/api/notes', (req, res) => {
    
})

//add note to db.json and return note to user
app.post('/api/notes', (req, res) => {

})

//remove note 
app.delete('/api/notes/:id', (req, res) => {

})

//routes
app.get('*', (req, res)=> {
    res.sendfile(path.join(__dirname + '/public/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendfile(path.join(__dirname + "/public/notes.html"))

})

//PORT listener
app.listen(PORT, function() {
    console.log("Express App listening on PORT: " + PORT)
})