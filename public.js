import express from 'express';
import http from 'http';
import https from 'https';
import fs from 'fs';
import cors from 'cors';

const app = express();

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/nozaki.ninja/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/nozaki.ninja/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/nozaki.ninja/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};


// Setting up the public directory
app.use(
    express.static(
        './',
        { dotfiles: 'allow' }
    )
);

//Setting up Cors
app.use(
    cors(
        {origin: '*'}
    )
);

// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(
    80, 
    ()=>{
    	console.log('HTTP Server running on port 80');
    }
);

httpsServer.listen(
    443, 
    ()=>{
    	console.log('HTTPS Server running on port 443');
    }
);