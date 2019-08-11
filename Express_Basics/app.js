
//easy to deal with urls
/*
var express=require("express");
var app=express();
app.get("/",function(request,response){
   response.send("welcome to the world of express js");
});
app.get("/contact",function(request,response){
    response.send("welcome to the world of express js. In contact page");
 });
 app.get("/home",function(request,response){
    response.sendfile(__dirname+"/index.html");    //but cannot display dynamic data
 });
 app.post("/contact",function(request,response){
    response.send("welcome to the world of express js. In contact page");
 });
app.listen(3000);
console.log("port 3000");


----------------------------------------------------------------------------------

var express=require("express");
var app=express();
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index1.html");
})

app.get("/login",function(req,res){
    var data=req.query;
    console.log(data);
    res.send("Welcome");
})
app.listen(3000);
console.log("port 3000");
------------------------------------------------------------------



var express=require("express");
var app=express();
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index1.html");
})

app.get("/login",function(req,res){
    var data=req.query;
    console.log(data);
    if(data.text==data.pass){
    res.sendfile(__dirname+"/success.html");
    }
    else
       res.sendFile(__dirname+"/failure.html");
})
app.listen(3000);
console.log("port 3000");

----------------------------------------------------------------------


//integration with view engines-ejs  (dynamicity, expression tag)
var express=require("express");
var app=express();

app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("index");
})

app.get("/login",function(req,res){
    var data=req.query;
    console.log(data);
    if(data.text==data.pass){
    res.render("success",{uname:data.text});        //rendering ejs file
    }
    else
       res.render("failure");
})
app.listen(3000);
console.log("port 3000");

------------------------------------------------------

//single ejs file
var express=require("express");
var app=express();

app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("index");
})

app.get("/login",function(req,res){
    var data=req.query;
    var message;
    console.log(data);
    if(data.text===data.pass){
    message="Login Successful"  ;//rendering ejs file
    }
    else
       message="Login failed";
       res.render("result",{uname:data.text,msg:message});
})
app.listen(3000);
console.log("port 3000");

--------------------------------------------------------------------

//pug engine -syntax is different-html file doesnt have tags , expression evaluation using # for dynamicity
var express=require("express");
var app=express();

app.set("view engine","pug");

app.get("/",function(req,res){
    res.render("index");
})

app.get("/login",function(req,res){
    var data=req.query;
    var message;
    console.log(data);
    if(data.text===data.pass){
    message="Login Successful"  ;//rendering ejs file
    }
    else
       message="Login failed";
       res.render("result",{uname:data.text,msg:message});
})
app.listen(3000);
console.log("port 3000");
------------------------------------------------------------------------

//css files inside public folder and also images
//static resources
var express=require("express");
var app=express();

app.set("view engine","ejs");
app.use("/public",express.static('public'));
app.get("/",function(req,res){
    res.render("index");
})

app.get("/login",function(req,res){
    var data=req.query;
    var message;
    console.log(data);
    if(data.text===data.pass){
    message="Login Successful"  ;//rendering ejs file
    }
    else
       message="Login failed";
       res.render("result",{uname:data.text,msg:message});
})
app.listen(3000);
console.log("port 3000");

-----------------------------------------------------------------


//mvc architecture(model view controller(all should be in different files))


//view is separated but still controller and models are clubed
var express=require("express");
var app=express();

app.set("view engine","ejs");
//controller
app.use("/public",express.static('public'));
//controller
app.get("/",function(req,res){
    res.render("index");
})
//controller
app.get("/login",function(req,res){
    var data=req.query;
    var message;
    console.log(data);
    //business logic-model
    if(data.text===data.pass){
    message="Login Successful"  ;//rendering ejs file
    }
    else
       message="Login failed";
       res.render("result",{uname:data.text,msg:message});
})
app.listen(3000);
console.log("port 3000");
--------------------------------------------------------------------
*/
//post


var express=require("express");
var app=express();

app.set("view engine","ejs");

app.use("/public",express.static('public'));

app.get("/",function(req,res){
    res.render("index");
})

app.get("/login",function(req,res){
    var data=req.query;
    var message;
    console.log(data);
    
    if(data.text===data.pass){
    message="Login Successful"  ;
    }
    else
       message="Login failed";
       res.render("result",{uname:data.text,msg:message});
})
app.listen(3000);
console.log("port 3000");


















