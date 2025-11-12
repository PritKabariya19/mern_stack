const express = require('express')
const app=express()
const port =3000


//  request ki khaani

// app.get('/',(req,res) =>{
//     // res.send("Got a get request")
//     res.sendFile('./dummy.html',{root:__dirname});
// });

// app.post('/items',(req,res)=>{
//     // res.send("Got a post request")
//     res.json({
//         X:1,
//         Y:2,

//         Z:3
//     })
    
// })
// app.put('/items/:id',(req,res)=>{
//     res.send("Got a put request");
// })
// app.delete('/items/:id',(req,res)=>{
//     res.send("Got a DELETE request");
// })

// import item ki router file
const item = require('./routs/item');

//  load application
app.use('/api',item)

// -> /api/ -> item home page
// -> /api/items -> item post request
//  -> /api/items/id -> put/delete request


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})