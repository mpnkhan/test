const express = require('express');
var cors = require('cors');
var path =require('path');

const app = express();
const port = 3000;

//https://github.com/expressjs/cors
const corsMiddleware = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
        .header('Access-Control-Allow-Headers', 'Authorization,Accept,Origin,DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range')
        .header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE,PATCH')
        .header('Access-Control-Allow-Private-Network', true);

    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
}
app.all("*", corsMiddleware);
app.use('/test', express.static('.'));

//Access http://localhost:3000/test/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

