// ye file sare item specific routs ko store karegi
const express = require('express')
const router = express.Router()

router.get('/',(req,res) =>{
    res.send("Got a get request")
    // res.sendFile('../dummy.html',{root:__dirname});
});

router.post('/items',(req,res)=>{
    // res.send("Got a post request")
    res.json({
        X:1,
        Y:2,
        Z:3
    })
    
})
router.put('/items/:id',(req,res)=>{
    res.send("Got a put request");
})
router.delete('/items/:id',(req,res)=>{
    res.send("Got a DELETE request");
})

module.exports = router