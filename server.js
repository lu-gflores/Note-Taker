const express= require('express');
const fs = require('fs');
const app = express();
const PORT = 8080;

//serve static files in public folder
app.use(express.static('public'));


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