import express from 'express';
import {color,background,style,resetAllColors} from 'nozaki-colors';

const app = express();
const port = 8888;

// Setting up the public directory
app.use(express.static('./'));

app.listen(
    port, 
    () => console.log(
        `${background.black}${color.cyan}${style.underlineOn}http://localhost:${port}${resetAllColors}`
    )
);