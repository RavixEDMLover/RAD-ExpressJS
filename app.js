
const express = require('express');
const app = express();
const port = 4000;

app.get("/",(req,res) => {
    res.send('How are you doing?');

} );

app.listen(port , ()=> {

    console.log('The App is listening on port '+port);
});
