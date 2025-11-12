const express = require("express")
const router = express.Router()


// middlewares

const  auth = function(req,res,next){
    console.log("i am inside auth middleware")

    // dummy user add kra
    req.user={userId:1,role:"Student"};

    if(req.user){
// if valid user  is there in req then proceed to next middleware
        next();
    }
    else{
        res.json({
            sucess:false,
            message:"Not a valid user"
        })
    }
}

const isStudent= function(req,res,next){
    console.log("I am inside student middleware");
    if(req.user.role==="Student"){
        next();
    }else{
         res.json({
            sucess:false,
            message:"you are not student"
        })
    }
}

const isadmin=function(req,res,next){
    console.log("inside in admin vala middleware");
     if(req.user.role==="Admin"){
        next();
    }else{
         res.json({
            sucess:false,
            message:"you are not Admin"
        })
}
}

// routes
router.get("/student",auth,isStudent,(req,res)=>{
    console.log("i am inside student route")
    res.send("student specific page")
})

router.get("/admin",auth,isadmin,(req,res)=>{
    console.log("i am inside Admin role");
    res.send("Admin specific page");
})

module.exports = router;