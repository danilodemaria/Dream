const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const server = http.createServer(app);
const port = process.env.PORT | 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port} ...`);
});

app.get('/',(req,res) => {
    res.send('Hello world');
})