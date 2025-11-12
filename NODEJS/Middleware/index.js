const express = require('express'); // include express
const app = express();

// variable thate store port number
const port = 3000; 

//inbuilt middleware -->json ne valid javascript object ma convert kre
app.use(express.json())




// middleware -loggin,auth,validation

// //creation of middleweare
// const loggingMiddleware = function(req,res,next){
//     console.log('Loging krra ');
//     next();// aa midleware puro thai pachhi next val ma move thavanu
// }
// // loding middleware to appliction
// app.use(loggingMiddleware);

// const AuthMiddleware= function(req,res,next){
//     console.log('auth krr rha hu ');
//     res.send("chalo sidhha ghar")//->pachina middleware ma n java dey direct responce send kari dey
//     // next();
// }
// app.use(AuthMiddleware);

// const validationmiddleware =function(req,res,next){
//     console.log('validation krr rha hu ');
//     next();// aa midleware puro thai pachhi next val ma move thavanu
// }
// app.use(validationmiddleware);





// aaa route handler ni uper j badha middleware banava na
app.get('/',(req,res) => {
      console.log("main route  hendler hun")
        console.log(req.body)
    res.send("hello my DEAR")
   
  
})
// starrt your server or appplications

app.listen(port,()=>{//konse portt ko listen karna hain
    console.log("Appliction start ");
}); 