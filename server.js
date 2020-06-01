const express= require('express');
const fs = require('fs');
const app = express();
const PORT = 8080;

//serve static files in public folder
app.use(express.static('public'));

//read db.json and return all saved notes as JSON
app.get('/api/notes', (req, res) => {
    
})

//add note to db.json and return note to user
app.post('/api/notes', (req, res) => {

})

app.delete('/api/notes/:id', (req, res) => {
    
})

//routes
app.get('*', (req, res)=> {
    return fs.readFile(__dirname + '/public/index.html', (err, html) => {
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(html);
    })
});

app.get('/notes', (req, res) => {
    return fs.readFile(__dirname + '/public/notes.html', (err, html) => {
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(html);
    })
})

//PORT listener
app.listen(PORT, function() {
    console.log("Express App listening on PORT: " + PORT)
})