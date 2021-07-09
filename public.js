import express from 'express';
const app = express();
const port = 80;

// Setting up the public directory
app.use(express.static('./'));

app.listen(
    port, 
    () => console.log(
        `http://localhost:${port}!`
    )
);