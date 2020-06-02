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

    //writing notes to db.json
    fs.writeFile('./db/db.json', JSON.stringify(userNotes, null, 2), (err) => {
        if(err) throw err;
    });
    console.log('Saved notes: ' + JSON.stringify(newNote));
    res.json(newNote);
})

//remove note 
app.delete('/api/notes/:id', function(req, res) {
    //let delNote = req.params.id;
    let userNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    userNotes = userNotes.filter(function (note) {
        return note.id != req.params.id;
    })

    fs.writeFile('./db/db.json', JSON.stringify(userNotes, null, 2), (err) => {
        if(err) throw err;
    });
    res.json(userNotes);
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