import express, { json } from 'express';
import cors from 'cors';
import https from 'https';
import fs from 'fs';
import router from './src/routes/routes.js';

const app = express();
app.use(json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("API LIGADA COM PROTOCOLO HTTP");
    console.log("LINK: http://localhost:3001");
});

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key')
}, app).listen(3000, () => {
    console.log("API LIGADA COM PROTOCOLO HTTPS");
    console.log("LINK: http://localhost:3000");
});