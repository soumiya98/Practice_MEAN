"use strict";
//export class frm myfirst
//import here
//so when executing this using.ts, first myfirst  executes and then can use definitions present in that file
/*
import {Person} from './myfirst'
var p=new Person("sou");
console.log("Using import");*/
//tsc filename.ts --watch (For compiling like nodemon)
//var-function level scoping
//let-block level scoping
{
    var x = 10;
    var a_1 = 20;
}
function dummy() {
    var y = 20;
    var b = 50;
    console.log(x);
    // console.log(a);  error cant be accessed bcos it is not in this block
}
//console.log(a); error
console.log(x);
//console.log(b);error
//console.log(y);error
