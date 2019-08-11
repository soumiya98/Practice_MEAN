var express=require("express");
var app=express();

app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("calc");
})

app.get("/calculate",function(req,res){
    var data=req.query;
    var a=parseInt(data.no1);
    var b=parseInt(data.n02);
    var message;
    var result;
    console.log(data);


    //use switch case
    if(data.button=='add'){
        message="Addition Result"
    result=(a+b);  ;
    }
    if(data.button=='sub'){
        message="Subtraction Result"
    result=(a-b);  ;
    }
    if(data.button=='div'){
        message="Division Result"
    result=(a/b);  ;
    }
    if(data.button=='mul'){
        message="Multiplication Result"
    result=(a*b);  ;
    }
    
       res.render("result",{result:result,msg:message});
})
app.listen(3000);
console.log("port 3000");
