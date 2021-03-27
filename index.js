const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send("I know how to open Node");
})

app.listen(42000, () => console.log('Listening to post 42000'));