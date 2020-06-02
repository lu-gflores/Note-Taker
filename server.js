const express= require('express');
const fs = require('fs');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3000;
//may need for storing notes
const storedNotes = [];

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
    let userNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    
    userNotes.push(newNote);
    
    fs.writeFile('./db/db.json', JSON.stringify(userNotes));
    console.log('Saved notes: ' + newNote);
    res.json(userNotes);
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
    console.log("Server listening on PORT: " + PORT)
})