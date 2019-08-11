var express=require('express');
var app=express();


//require mongoose
var mongoose=require('mongoose');


//require body parser

var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//make connection to mongodb, here postdb is database name
mongoose.connect("mongodb://localhost:27017/postdbapp",{useNewUrlParser:true});

//create schema for database

var postschema=new mongoose.Schema({
    title:String,
    descriptiom:String
});

var pdata=mongoose.model("pdata", postschema,"pdata");//collection with name pdata(2nd pdata), 1st pdata-username



//call index.html in express
/*
app.use('/',(req,res,next)=>{       //should be in beginning
   // console.log("This is my second output");
   // res.send("text");  //middleware
   // next();  //pass control to app.get (ie next function)
})*/

app.get('/',(req,res,next)=>{       //should be in beginning
    // console.log("This is my second output");
     res.sendfile(__dirname+"/index.html");  //middleware
    // next();  //pass control to app.get (ie next function)
 })

//adding post route to save data in database
app.post('/addpost',(req,res)=>{
    var myData=new pdata(req.body);
    myData.save()
    .then(item=>{
        res.send("Saved to database");
    })
    .catch(err=>{
        res.status(400).send("saving data failed");
    });

});
/*
app.get('/',(req,res)=>{    //if this is called first, then app.use wont be executed
    console.log("This is my route output");
})*/

app.listen(3000,()=>{
    console.log('Server started');
})