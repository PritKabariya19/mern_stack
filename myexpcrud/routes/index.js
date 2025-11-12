var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

// Mongodb connection
mongoose.connect('mongodb://127.0.0.1:27017/charusataiml')
.then(() => console.log("MongoDB Connection Done"))
.catch((err) => console.error("Connection failed: "+ err));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET home page
router.get('/home', function(req, res, next) {
  res.render('home');
});

// GET about page
router.get('/about', function(req, res, next) {
  res.render('about');
});

var ProductModel= require('../models/Product');

// GET add-product page
router.get('/add-product', function(req, res, next) {
  res.render('add-product');
});

// POST add-product-process page
router.post('/add-product-process', function(req, res, next) {
  var productData = {
    pname: req.body.txt1,
    pprice: req.body.txt2,
    pdetails: req.body.txt3
  }
  var mydata = ProductModel(productData)
  mydata.save()
  .then(()=>{
    res.send("record Added")
  })
  .catch(err=>console.log(err))
});

// edit product
router.get('/edit-product/:id',function(req,res,next){
  var id = req.params.id;
  ProductModel.findById(id)
  .then(data=>{
    console.log(data);
    res.render('edit-product',{mydata:data});
  })
  .catch(err=>console.log(err));
});

// update product
router.post('/update-product/:id',function(req,res,next){
  var id = req.params.id;
  var myproduct = {
    pname: req.body.txt1,
    pprice: req.body.txt2,
    pdeatils: req.body.txt3
  }
  ProductModel.findByIdAndUpdate(id,myproduct)
  .then(data=>{
    console.log(data)
    res.redirect('/display-product')
  })
  .catch(err=>console.log(err));
})

router.get('/display-product', function(req, res, next) {
  ProductModel.find()
  .then(data=>{
    res.render('display-products',{mydata:data});
  })
  .catch(err=>console.log(err));
});

router.get('/delete-product/:id', function(req, res, next) {
  var id = req.params.id;
  ProductModel.findByIdAndDelete(id)
  .then(()=>{
    res.redirect('/display-product');
  })
  .catch(err=>console.log(err));
});

router.post('/update-product/:id',function(req,res,next){

  var id = req.params.id;
  console.log("aaa")
  var myproduct = {
    pname:req.body.txt1,
    pprice:req.body.txt2,
    pdetails:req.body.txt3,
  }
  ProductModel.findByIdAndUpdate(id,myproduct)
  .then(data=>{
    console.log(data)
    res.redirect("/display-product")
  }).catch(err=>console.log(err))
})

router.get('/display-product-api', function(req, res, next) {
  ProductModel.find()
  .then(data=>{
    res.json(data);
  })
  .catch(err=>console.log(err));
});

module.exports = router;