/*console.log("Welcome to the world of typescript");

//normal way
var my=function(){
    return "Hello"; 
}

//alternate
var demo=() ==> {
    console.log("Hi");
};

//2
var a:number;
var b:string;
var c:boolean;
var d="Sou";//automatically assigned type

a=10;
//a="hello"; error

d=false; // once assigned type cannot be changed(Even with error it creates javascript file)
console.log(d);  

var e:undefined;
var f:null;
e=undefined;
//e=90;  error
f=null;
//f=10; error

function greet(name:string):string{
    return "Welcome "+name+" " ;
}
console.log(greet("Sou"));
//greet(10); error
//var returnType:number=greet("Sou"); error
//greet("Sou","gee"); error

//console.log(greet()); error

function Demo(a):void{
    console.log(a);
}
Demo(4);
Demo("sou");

//var x:string=Demo("Sou"); error

var x:void=Demo(4);
console.log(x);  //(function not returning anything -undefined)

function display(a:string,b:number,c:boolean,d?:number){   //after optional parameter, reqd parameter cannot be specified, so it should be in the end
    console.log("a="+a);
    console.log("b="+b);
    console.log("c="+c);
    console.log("d="+d);
}
display("BBB",90,true,80);
//display("BBB",90,true); error(without optional ie ?)
display("BBB",90,true);  //no error (Optional argument)
function display(a:string,b:number,c:boolean,d:number=120){   //default values
    console.log("a="+a);
    console.log("b="+b);
    console.log("c="+c);
    console.log("d="+d);
}

var g="Sou";//implicit type assignment(only when assigning variabe while declaring)
var h; //no implicit type assignment so it will be of type any

function greet():string{
    return "Welcome";
}

var value=greet();//implicit type is taking place


//union
var val:number|string;
val=10;
val="sou";


//if variable of any type other than null,undefined, we can store undefined,null in that
//but if type is undefined,null we cant store any other type

var myArr:number[];
myArr=[];
myArr=[10,20];
//myArr=['10'];  error
//myArr=10; error



//tuple:Create bunch of values of fixed type
var val:[number,string,string,boolean];
val=[10,"sou","rao",true];

//val=["sou","rao",10,false];  error


//class

class Person{
    fname:string;  
    lname:string;
}
var p1=new Person;
p1.fname="sou";
console.log(p1);  

//methods
class mPerson{
    fname:string;  
    lname:string;
    getfname():string{
        return this.fname+this.lname;
    }
}
var p1=new mPerson;
p1.fname="sou";
console.log(p1);
console.log(p1.getfname());   //sou undefined(bcos lastnam not defined)



//constructors

class myPerson{
    fname:string;  
    lname:string;
    constructor(fname:string,lname:string){
          this.fname=fname;
          this.lname=lname;
    }

    getfname():string{
        return this.fname+this.lname;
    }
}
var p1=new myPerson("Sou","rao");
//p1.fname="sou";
console.log(p1);
console.log(p1.getfname()); 

//cannot overload constructor
class mynPerson{
    fname:string;  
    lname:string;
    constructor(fname:string,lname:string){
          this.fname=fname;
          this.lname=lname;
    }
    constructor(){
        this.fname="";
        this.lname="";                 error
    }

    getfname():string{
        return this.fname+this.lname;
    }
}
var p1=new mynPerson("Sou","rao");
//p1.fname="sou";
console.log(p1);
console.log(p1.getfname()); 


//visibility (default:public)
class newPerson{
    private fname:string;  
    private lname:string;
    constructor(fname:string,lname:string){                          //even private is given in ts, we can still access in js
                                                                       //only for development env not for run time env
                                                                       //bcos we dont have scopes in js
          this.fname=fname;
          this.lname=lname;
    }

    getfname():string{
        return this.fname+this.lname;
    }
}
var p1=new newPerson("Sou","rao");
//p1.fname="sou";
console.log(p1);
console.log(p1.getfname()); 


//shortcut notation
//different scope is also valid

class nextPerson{
   
    constructor(private fname:string,private lname:string,public tech:string){
          
    }

    getfname():string{
        return this.fname+this.lname;
    }
}
var p1=new nextPerson("Sou","rao","typescript");
//p1.fname="sou";
console.log(p1);
console.log(p1.getfname()); 

//class complex no-private real,img, 

class Complex1{
    constructor(private real:number=0,private imag:number=0){
          
    }
    display():void{
        console.log(this.real+"+i"+this.imag)
  

       
         
        
    }
    sum(n1:Complex1,n2:Complex1){
        this.real=n1.real+n2.real;
        this.imag=n1.imag+n2.imag;
        

    }
}

var comp1=new Complex1(12,3);
//var comp2=new Complex(20,2);
comp1.display();
var res=new Complex1();
var comp2=new Complex1(13,6);
res.sum(comp1,comp2);
res.display();



//Inheritance

class Person{
    fname:string;
    lname:string;
    display(){
        console.log(this.fname);
        console.log(this.lname);
    }

}

class Employee extends Person{
    dept:string;
    displayDetails(){
        super.display();
        console.log(this.dept);
    }

}

var emp=new Employee;
emp.fname="AAA";
emp.lname="BBB";
emp.dept="SSS";
emp.display();
emp.displayDetails();   

//private properties

class student{
   protected rollno:number;
    protected name:string;
    input(rollno:number,name:string):void{
        this.rollno=rollno;
        this.name=name;
    }
    display(){
        console.log(this.rollno);
        console.log(this.name);
    }


}
//protected - child class can access parent class variables(not possible in private)
class marks extends student{
   protected marks1:number;
   protected marks2:number;
   protected marks3:number;

   inputmarks(marks1:number,marks2:number,marks3:number):void{
    this.marks1=marks1;
    this.marks2=marks2;
    this.marks3=marks3;
}
    displayDetails(){
        super.display();
        console.log(this.marks1);
        console.log(this.marks2);
        console.log(this.marks3);
    }

}

class grade extends marks{
  private grade:string;
  calculate(){
      if((this.marks1+this.marks2+this.marks3)/3>30)
             this.grade="A";
    else
       this.grade="B";
  }
  displayAllDetails(){
      super.display();
      super.displayDetails();
      console.log(this.grade);

  }
}

var soumiya=new marks;
soumiya.input(1,"Soumiya");
soumiya.inputmarks(20,20,20);
soumiya.displayDetails();
soumiya.display() 

var sou=new grade;
sou.input(2,"Sou");
sou.inputmarks(30,60,30);
sou.calculate();
sou.displayAllDetails();          

//using constructor
class student{
    constructor(protected rollno:number,protected name:string){

    }
     display(){
         console.log(this.rollno);
         console.log(this.name);
     }
 
 
 }

class marks extends student{
   constructor(rollno:number,name:string,protected marks1:number,protected marks2:number,protected marks3:number){
       super(rollno,name);
   }
     displayDetails(){
         super.display();
         console.log(this.marks1);
         console.log(this.marks2);
         console.log(this.marks3);
     }
 
 }
 
 class grade extends marks{
   private grade:string;
   calculate(){
       if((this.marks1+this.marks2+this.marks3)/3>30)
              this.grade="A";
     else
        this.grade="B";
   }
   displayAllDetails(){
       super.display();
       super.displayDetails();
       console.log(this.grade);
 
   }
 }
 
 
 var sou=new grade(1,"sou",20,30,40);
 sou.calculate();
 sou.displayAllDetails();          


 //base class reference variable-type compatible with derived class
 class PopCorn{
     pop():void{
         console.log("Popcorn popping");
     }
     dummy(){

     }
 }

 class Butter extends PopCorn{
    pop():void{
        console.log("Butter Popcorn popping");
    }
    quantity(ounce:number):void{

    }
}

class Caramel extends PopCorn{
    pop():void{
        console.log("Caramel Popcorn popping");
    }
}

//popcorn reference is of type PopCorn-so quantity() not accessible even butter has it bcos base class(popcorn) doesnt have quantity  (object slicing)
//base-X(),Y()
//derived-X(),Y(),Z(),A()  
//obj of base can access only X and Y functions
var popcorn:PopCorn;
popcorn=new Butter();
popcorn.pop();


popcorn=new Caramel();
popcorn.pop();

popcorn=new PopCorn();
popcorn.pop();

var pop:Butter;   //pointer is capable of accessing all functions
pop.dummy();
pop.quantity(12);      
//Interface

interface shape{
    area():void;
}
class circle implements shape{
    constructor (private radius:number){

    }
    area():void{
        console.log(Math.PI*this.radius**2);
    }
    
}
var ob:shape=new circle(3);
ob.area();  


//car interface-engine method
//3 classes implement Car
//driver class name and car- function drive

interface Car{
    engine():void;
}

class audi implements Car{
    
    engine():void{
        console.log("Audi engine")
    }
}
class bmw implements Car{
    engine():void{
        console.log("bmw engine")
    }
}
class benz implements Car{
    engine():void{
        console.log("Benz engine")
    }
}

class driver{
    constructor(protected name:string, protected carname:Car){
       
    }
    drive():void{
        console.log("Driver "+this.name+" drives using")
        this.carname.engine();
        
    }

} 
var ob:Car;

 ob=new audi();
 var car1=new driver("Sou",ob);
 car1.drive(); 

var arr:number[];
arr=[10,20,30];
for(var element of arr){
    console.log(element);
}
for(var index in arr){
    console.log(index);
}

class demo{
    readonly name:string="Sou";

}
var dob:demo;
//dob.name="rao";  //error bcos it is  readonly
 

 //using constructor readonly
class demo{
    constructor(readonly name:string){

    }
}
var obj=new demo("sou");
obj.name="rao";


export class Person{
    constructor(public name:string){

    }
}
var p1=new Person("Sou");
console.log(p1);*/

//anmal interface-voice function, type variable
//create mutiple animals
//zoo class-array of animals
interface animal{
    voice():void;
    type:string;
}

class dog implements animal{
    voice():void{
        console.log("Barks");
    }
    type="Omnivorous";
}
class Lion implements animal{
    voice():void{
        console.log("roars");
    }
    type="Carnivour";
}

class Elephant implements animal{
    voice():void{
        console.log("trumpets");
    }
    type="Herbivour";
}

class zoo{
    array(){
        var ob1=new dog;
        var ob2=new Lion;
        var ob3=new Elephant;
       var arr:animal[]=[ob1,ob2,ob3];      
       for(var element of arr){
           console.log(element);
           element.type;
           element.voice();
       }
       

    }


    
}

var obj=new zoo();
obj.array();








































