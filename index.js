const express = require('express');
const app = express();
const port = 8888;

// Setting up the public directory
app.use(express.static('./'));

app.listen(
    port, 
    () => console.log(
        `http://localhost:${port}!`
    )
);