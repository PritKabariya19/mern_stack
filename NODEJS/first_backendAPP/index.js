const express = require('express'); // include express
const app = express();

// variable thate store port number
const port = 3000; 


app.get('/',(req,res) => {
    // res.send("hello my dear")
    console.log("Get request")
})
// starrt your server or appplications

app.listen(port,()=>{//konse portt ko listen karna hain
    console.log("Appliction start ");
});