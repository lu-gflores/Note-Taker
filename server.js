const express= require('express');
const fs = require('fs');
const app = express();
const PORT = 8080;


//routes
app.get('/*', (req, res)=> {
    
});

app.get('/notes', (req, res) => {

})

//PORT listener
app.listen(PORT, function() {
    console.log("Express App listening on PORT: " + PORT)
})