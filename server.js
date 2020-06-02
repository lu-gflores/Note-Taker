const express= require('express');
const fs = require('fs');
const path = require('path')
const app = express();
const PORT = 8080;
//may need for storing notes
const userNotes = [];

//serve static files in public folder
app.use(express.static('public'));

//handles data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//read db.json and return all saved notes as JSON
app.get('/api/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '/db/db.json'))
})

//add note to db.json and return note to user
app.post('/api/notes', function(req, res) {
    let newNote = req.body; //save new note on body
    
    userNotes.push(newNote);
    return res.json(newNote);
})

//remove note 
app.delete('/api/notes/:id', function(req, res) {
    
})

//html routes
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'))
});

app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname + "/public/notes.html"))
})

//PORT listener
app.listen(PORT, function() {
    console.log("Express App listening on PORT: " + PORT)
})