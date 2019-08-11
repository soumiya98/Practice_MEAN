var express=require("express");

var fs=require("fs");
var bodyparser=require("body-parser");
//var urlencodedparser=bodyparser.use.urlencoded({extended:false});
var app=express();
app.use(bodyparser.json());
//app.set("view engine","ejs");

/*app.post("/",function(req,res){
    
    var data=fs.readFile("item.json",function(err,data){
        if(err){
            console.log("error");
        }
        var jdata=JSON.parse(data);
        res.send(jdata);
       
});
});

app.get("/",function(req,res){
    var rs=req.body;
    console.log(rs);
    fs.readFile("item.json",function(err,data){
        if(err){
            console.log("error");
        }
        var jdata=JSON.parse(data);
        //res.send(jdata);
        jdata.items.find(function(item, i){
            
            if(item!=null && item.ino===rs){  

                res.send(item);
                
            }
    })
    
});
})

app.post("/add",function(req,res){
    var rs=req.body;
    var jdata
    console.log(rs);
    fs.readFile("item.json",function(err,data){
        if(err){
            console.log("error");
        }
        jdata=JSON.parse(data);
    //    res.send(jdata);
        jdata.items.push(rs)
        fs.writeFile('item.json', JSON.stringify(jdata), function (err) {
            console.log(err);
          });
      });

     
        
      //delete(jsonParsed.persons[0]);
     //console.log(jsonParsed);
     
});

app.delete("/delete/:ino",function(req,res){
    var rs=req.params.ino;
    var jdata,jjdata;
    var index;
    var data1;
    var j;

    console.log(rs);
    fs.readFile("item.json",function(err,data){
        if(err){
            console.log("error");
        }
        jdata=JSON.parse(data);
    //    res.send(jdata);
    jdata.items.find(function(item, i){
            
        if(item!=null && item.ino===rs){  

          //  res.send(item);
         
            index=i;
            
        }
        
      
    
})
 delete(jdata.items[index]);
 console.log(jdata);
      //delete(jsonParsed.persons[0]);
      fs.readFile("items.json",function(err,data){
        if(err){
            console.log("error");
        }
        jjdata=JSON.parse(data);
      jdata.items.find(function(item, i){
            
        if(item!=null){  
             jjdata.itemsmod.push(item);
           
         
            index=i;
            
        }
        
      
    
})
console.log(jjdata);
res.send(jjdata);
fs.writeFile('items.json', JSON.stringify(jjdata), function (err) {
    console.log(err);
  });
      })
    })

           
      

     
        
     
     
});


app.put("/mod",function(req,res){
    var rs=req.body;
    var iname=rs.iname;
    var ino=rs.ino;
    var comments=rs.comments;
    console.log(comments[0]);
    var jdata
    console.log(rs.iname);
    fs.readFile("item.json",function(err,data){
        if(err){
            console.log("error");
        }
        jdata=JSON.parse(data);
    //    res.send(jdata);
    jdata.items.find(function(item, i){
            
        if(item!=null && item.ino===rs.ino){  

          console.log(item);
         
            index=i;
            
        }
        
      
    
})

jdata.items[index].iname=iname;
jdata.items[index].ino=ino;
jdata.items[index].comments=comments;
console.log(jdata);
fs.writeFile('item.json', JSON.stringify(jdata), function (err) {
    console.log(err);
  });
  res.send(jdata);
      });


})*/

app.delete("/delete/:ino",function(req,res){
    var rs=req.params.ino;
    var jdata,jjdata;
    var index;
    var data1;
    var j;

    console.log(rs);
    fs.readFile("item.json",function(err,data){
        if(err){
            console.log("error");
        }
        jdata=JSON.parse(data);
    //    res.send(jdata);
    jdata.items.find(function(item, i){
            
        if(item!=null && item.ino===rs){  

          //  res.send(item);
         
            index=i;
            
        }
        
      
    
})
 delete(jdata.items[index]);
 console.log(jdata);
      //delete(jsonParsed.persons[0]);
      fs.readFile("items.json",function(err,data){
        if(err){
            console.log("error");
        }
        jjdata=JSON.parse(data);
        console.log("jj"+jjdata);
        if(jjdata!=null){
            console.log("Inside")
            jdata.items.find(function(item, i){
            
                    console.log(jjdata.itemsmod.item);
                     jjdata.itemsmod.pop();
                   
                 
                    
                    
                
           // delete(jjdata.itemsmod.iname);
        });
    
}
      jdata.items.find(function(item, i){
            
        if(item!=null){  
             jjdata.itemsmod.push(item);
           
         
            index=i;
            
        }
        
      
    
})
console.log(jjdata);
res.send(jjdata);
fs.writeFile('items.json', JSON.stringify(jjdata), function (err) {
    console.log(err);
  });
      })
    })

           
      

     
        
     
     
});



app.listen(3000);