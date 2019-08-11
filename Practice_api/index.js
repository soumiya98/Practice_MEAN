var express=require('express');
var app=express();

app.use(express.json());

//create array
const courses=[
    {id:1,name:'MEAN'},
    {id:2,name:'PYTHON'},
    {id:3,name:'JAVA'},
    
    
    ]

    

//get route

app.get('/',function(req,res){
    res.send("HELLO WORLD");   //output seen in browser ( localhost:3000/)
})

app.get('/soumiya',function(req,res){
    res.send([1,2,3]); 
})  

app.get('/api/course',function(req,res){
    res.send(courses)
})

app.get('/api/course/:id',(req,res)=>{
    res.send(req.params.id);
})

app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.params);
})

//(post route

app.post('/api/course/post',(req,res)=>{
    var course={
        id:courses.length+1,
        name:req.body.name
    }
    courses.push(course);
    res.send(course);
})



//creating http server  app instance listen method

app.listen(3000,function(req,res){                         //app.listen(port-to-listen,function) port-can give any no
 console.log('HTTP SERVER STARTED SUCCESSFULLY')   //seen in  terminal
});
