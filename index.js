const express = require("express");
const https = require('https');


const app = express();

app.use(express.static("public"));



app.get("/", (req, res) => {




    https.get('https://catalog.roblox.com/v1/favorites/assets/2263341598/count', (res) => {
        console.log('statusCode:', res.statusCode);
      
        res.on('data', (d) => {
          process.stdout.write(d);
          console.log(d);
          res.send(d);
        });

      
      }).on('error', (e) => {
        console.error(e);
      });

});





