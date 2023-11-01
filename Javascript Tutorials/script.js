/* Basically console.log is used to print some string in the console and also we can embed some
expressions arithmetic expression like 1+2,4+3 ETC and it will print the output
of expressions */

// type log itself in vs studio which is shortcut for console.log()


//console.log(1+3+5);
//console.log("Hi this is karthik wants to be full stack web developer");

/* Single line and multiline commenting 

1. use // for single line comments in js
2. Multi line comments can be done using forward slash star  star forward slash 
3. commenting used to make some code inactive and also to increase readability of codes to understand 
the source code to all the developers 
*/

/*      variables practicals   */

//var name = "karthik";
//var name = "rahul";
//console.log(name);  // we can get the output but this is not right practice.

// let keyword

//let name1 = "karthik";
 //name1 = "lalit";
//console.log(name1);

// use of const keyword
//const name2 = "karthik";
//console.log(name2);

// Practicals for Data types

// // number data type used for numbers
// let num = 56;
// console.log(num);
// console.log(typeof num);

// // string
// let str = 'bhole';
// console.log(typeof str);

// //boolean
// let bool = true;
// console.log(typeof bool);

// // null
// let le = null;
// console.log(typeof le);

// //undefined
// let b;
// console.log(typeof b);
// console.log(b);


// practicals for type conversion
// console.log("num as string + number");
// let result = '3' + 2;
// console.log('a'+2);
// console.log(result);
// console.log(typeof result);

// console.log(" num as string + boolean");
// console.log('a'+true);
// let result1 = '3' + true;
// console.log(result1);
// console.log(typeof result1);

// console.log("num as string + undefined");
// let c;
// console.log('a'+c);
// let result2 = '3' + c;
// console.log(result2);
// console.log(typeof result2);

// console.log("num as string + null");
// console.log('a'+null);
// let result3 = '3' + null;
// console.log(result3);
// console.log(typeof result3);

// console.log("num as string - number");
// console.log('a'-2);
// let result4 = '3' - 2;
// console.log(result4);
// console.log(typeof result4);

// console.log("num as string - string");
// console.log('a'-'henlo');
// let result5 = '3' - 'henlo';
// console.log(result5);
// console.log(typeof result5);

// console.log("num as string - boolean");
// console.log('a'-true);
// let result6 = '3' - true;
// console.log(result6);
// console.log(typeof result6);

// console.log("num as string - null");
// console.log('a'-null);
// let result7 = '3' - null;
// console.log(result7);
// console.log(typeof result7);

// console.log("num as string - undefined");
// let b;
// console.log('a'-b);
// let result8 = '3' - b;
// console.log(result8);
// console.log(typeof result8);
// console.log(typeof NaN);
//explicit conversion

// console.log("string to number");
// let res = '3';
// res = Number(res);
// console.log(res);
// console.log(typeof res);

// console.log("null to number");
// let res1 = null;
// res1 = Number(res1);
// console.log(res1);
// console.log(typeof res1);

// console.log("converting to String type");
// let res3 = null;
// res3 = String(res3);
// console.log(res3);
// console.log(typeof res3);

// console.log("converting to String type");
// let res4 = true;
// res4 = String(res4);
// console.log(res4);
// console.log(typeof res4);

// console.log("converting decimal to integer");
// let res5 = 34.45;
// res5 = parseInt(res5);
// console.log(res5);
// console.log(typeof res5);


// console.log("converting int to decimal");
// let res6 = 34;
// res6 = parseFloat(res6);
// console.log(res6);
// console.log(typeof res6);

// operators as usual topics nothiign much to discuss 
// but let us use strict comparison operators .
// let a = '3';
// let b=3;
// let k=4;
// let c=true;
// let d =1;
// console.log(c===d);
// console.log(b===k);
// console.log(a===b);
// console.log(a!==b);

// condtional statements

// let a =9;
// let b=14;
// if(a<b){
//     console.log("a is smaller");
// }else if(b<a){
//     console.log("b is smaller ");
// }else{
//     console.log("both are equal");
// }

// // switch statment

// let ch =2;
// switch (ch) {
//     case 1:console.log("this is first case");
        
//         break;

//     case 2:console.log("this is 2nd case");
//         break;
//     default:console.log("this is default case");
//         break;
// }

// loops practicals

// for(let i=1;i<=10;i++){
//     console.log(`4 * ${i} = ${4*i}`);
// }
// let i=1;
// while (i<=10) {
//     console.log(`5 * ${i} = ${5*i}`);
//     i++;
// }

// let k=1;
// do {
//     console.log(`6 * ${k} = ${6*k}`);
//     k++;
// } while (k<=10);

// functions practicals

// // let us create some functions
// let k=9;
// function add(a,b,c) {
//     let x = 100;
//     console.log(k);
//     console.log(x);
//     return a+b+c;
// }
// console.log(add(2,3,4));
// //console.log(x);

// // anonymous funtions 

// let add1 = function (a,c,d){
//     let b = 23;
//     return a+b+c+d;
// }
// console.log(add1(2,3,4));

// // self invoking ananoymous functios

// (function (name , designation) {
//     console.log(name+" "+designation);
// })("karthik","engineer");

// // arrow functions

// let a = (a,b)=>{return a+b;};
// console.log(a(3,4));

// let f = ()=>console.log("inside arrow function shoretened");
// f();

// (()=>console.log("inside arrow function shoretened and self invoking"))();


// all about arrays
 let names = ["ravi","loki","rappel","olso"];
// console.log(names);
// console.log(names.length);
// console.log(names[2]);// indexing starts from 0.

// // arrays in javascript can hold different data types at same time .

// let random = ["kds",1,2,true,null,undefined];
// console.log(typeof random[5]);

 names.push("cohlt");
 console.log(names);
 names.unshift("police");
 console.log(names);

// // splice is way of insertion and also deletion of elements.

 let delelemnts = names.splice(1,2,"lakshimi");
 console.log(names);
 console.log(delelemnts);

// // For each 

// names.forEach((val,ind,arr)=>{
//     console.log(val + "  "+ind+"  "+arr);
// });

// let brt = names.forEach((val,ind,arr)=>{
//     return val+"foreachreturned";
// });
// console.log(brt);

// let ar = names.map((val,ind,pl)=>{
//     return val+"modd";
// });
// console.log(ar);

// // concat 
// console.log("concat");
// let ar1 = [1,2,3];
// let ar2 = ["dfd",true];
// console.log(ar1.concat(ar2));
// console.log(ar1);
// console.log(ar2);

// console.log("reverse method");
// console.log(ar1.reverse());
// console.log(ar1);
// console.log("indexof method");
// console.log(ar1.indexOf(2));
// console.log(ar1.indexOf(6));
// console.log("sort method");
// console.log(ar1.sort());
// console.log(ar1);
// console.log("slice method");
// console.log(ar1.slice(1,2));
// console.log(ar1);
// console.log("tostring method");
// console.log(ar1.toString());
// console.log(typeof ar1.toString());
// console.log(ar1);
// console.log("filter method");
// let filter = ar1.filter((val,ind,array)=>{
//     return val==2;
// });
// console.log(filter);

// console.log("find method");
// let found = names.find((val,ind)=>{
//     return val == "olso"
// });
// console.log(found);
// console.log("findIndex method");
// console.log(names.findIndex((val)=>{
//     return val=="cohlt";
// }));
// console.log("findlastindex method");
// console.log(names.findLastIndex((val)=>{
    
//         return val=="cohlt";
    
// }));
// console.log("split method");
// let namestr = "karthik,rahul,loki,cena,hlsi,lokesh";
// let namarr = namestr.split(",");
// console.log(namarr);
// console.log("join method");
// let strnam = namarr.join("*");
// console.log(strnam);

// console.log("for in loop");
// let samplearr= [1,2,3,4,5,6,7,8];
// for (const key in samplearr) {
// console.log(key);
// console.log(samplearr[key]);
// }

// console.log("for of");
// for (const element of samplearr) {
//     console.log(element);
// }

// console.log("multidimensional arrays practicals");

// let darr2 =[
//     ["karthik",27],
//     ["rahul",34],
//     ["ponish",45],
//     ["raod",78],
//     ["alas",12]
// ];

// darr2.forEach((val)=>{
//     val.forEach(v=>{
//         console.log(v);
//     });
// });

// for (const element of darr2) {
//     for (const el of element) {
//         console.log(el);
//     }
// }

// copy spread operator, slice

// let arr1= ['asd','dfd','erer','lkjn'];
// let arr2 = arr1;
// console.log(arr1);
// console.log(arr2);
// console.log("after pushing");
// arr1.push("lode");
// console.log(arr1);
// console.log(arr2);
// console.log('after using slice to copy array');
// let arr3 = arr1.slice();
// console.log(arr3);
// arr3.push("police");
// console.log(arr1);
// console.log(arr3);
// console.log("use spread operator to copy all the elements");
// let arr4= [...arr1];
// arr4.push("nghj");
// console.log(arr4);
// console.log(arr1);
// console.log("array destructuring ");
// let samplearr=['abc','def','ghi','jkl','mno'];
// let [it1,it2,it3] = samplearr;
// console.log(it1 + " "+it2+" "+it3);

// let [...it4] = samplearr;
// console.log(it4);
// it4.push("bbbbbb");
// console.log(it4);
// console.log(samplearr);

// let [it5,it6,it7,...it8] = samplearr;
// console.log(it1 + " "+it2+" "+it3);
// console.log(it8);
// it8.push("ppppppp");
// console.log(it8);
// console.log(samplearr);

// // objects in js
// console.log("accessing the obj values");
// let obj = {
//     "name" : "karthik",
//     age:22,
//     designation:"engineer"
// }
// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj.age);

// console.log("functions inside object");
// let obj1 = {
//     fun:function() {
//         console.log("this is inside the function which inside the object");
//     }
// };
// obj1.fun();

// console.log("arrays inside the object");
// let obj3 = {
//     array1 : [1,2,3,4,5,6,7,8,9,10]
// };

// console.log(obj3.array1);
// console.log("adding properties explicitly");
// obj3.rollno = [23,34,45,56,67,89,90];
// obj3["aadhaId"] = "AER224234KKKK22";
// console.log(obj3);

// console.log("asusming object as array so we use for in and for of loops to access the objec key-values");
// for (const key in obj3) {
//     console.log("index is :" + key);
//     console.log(obj3[key]);
// }

// for (const iterator of Object.keys(obj3)) {
//     console.log(iterator);
//     console.log(obj3[iterator]);
// }

// console.log("creating array of objects");
// let ar= [{userid:1,name:"karhtik"},{userid:2,name:"Polit"},{userid:3,name:"parth"}];

// for (const key in ar) {
//    console.log(ar[key].userid + ar[key].name);
// }

// console.log("destructuring of array which has objects");
// let arr = [{userid : 1,name:"karthik"},{userid : 2,name:"rahul"},{userid : 3,name:"shankar"},{userid : 4,name:"rohn"}];
// let [item1,...item2] = arr;
// let [{name},item_2,{name:name2}] = arr;
// console.log(item1);
// console.log(item2);
// console.log(item_2);
// console.log(name);
// console.log(name2);

// console.log("functions inside functions");
// function fun1() {
//     console.log("inside the func1");
//     function fun2() {
//         console.log("inside nested fun2");
//     }
//     fun2();
// }
// fun1();

// // sets maps
// const set1 = new Set([1,2,3,3,4,5,5,6]);
// set1.add(34);
// set1.add("sdfsd");
// console.log(set1);

// const map1 = new Map();
// map1.set("name","karthik");
// console.log(map1.get("name"));

// // this keyword

// let obv = {
//     fname : "raavi",
//     age : 8,
//     fun:function(){
//         console.log(this.fname);
//     }
// }
// obv.fun();

// function vehicle(){
//     let naame ;
//     this.naame = "karthik";
//     return this;
// }
// console.log(new vehicle());

// function vehicle1(name){
//     let naame ;
//     if(!new.target){
//         return new vehicle1(name);
//     }
//     this.naame = name;
//     return this;
// }
// console.log(vehicle1("suresh"));

// // all about async nature .

// console.log("this is step 1");
// console.log("this is step2");
// setTimeout(()=>{console.log("step3");},5000);
// console.log("this is step4");
// console.log("this is step5");
// console.log("callback experiments");
// function disp(params) {
//     console.log(params);
// }

// function sum(a,b,func1) {
//     func1(a+b);
// }
// sum(10,10,disp);

// console.log("call back hell");

// function logadinData(callback){
//     setTimeout(()=>{
//         console.log("1. loading data.........");
//         callback();},5000);
    
// }
// function CollectingData(callback){
//     setTimeout(()=>{
//         console.log("2. collecting data.........");
//         callback();
//     },5000);    
// }
// function approvingData(callback){
//     setTimeout(()=>{
//         console.log("3. approving data.........");
//         callback();
//     },4000);
    
// }
// function approvedData(){
//     console.log("4. approved data.........");
// }



// logadinData(function(){
//     CollectingData(function(){
//         approvingData(function(){
//             approvedData();
//         });
//     });
// });


//let us do promises .
// console.log("all about promises");

// function decide(param){

//     return new Promise((resolve,reject)=>{
//         if(param){
//             resolve("task completed");
//         } else{
//             reject("Task not completed");
//         }
//     });
// }
// let onResolve = (msg)=>{console.log(msg);}
// let onReject = (msg)=>{console.log(msg);}
// decide(false).then(onResolve).catch(onReject);



// function logadinData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("1. loading data.........");
//             resolve();},5000);
    
//     });    
// }
// function CollectingData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("2. collecting data.........");
//             resolve();
//         },5000);
//     });
        
// }
// function approvingData(){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("3. approving data.........");
//             resolve();
//         },4000);
//     });
    
    
// }
// function approvedData(){
//     console.log("4. approved data.........");
// }

// logadinData().then(CollectingData).then(approvingData).then(approvedData);

// logadinData(function(){
//     CollectingData(function(){
//         approvingData(function(){
//             approvedData();
//         });
//     });
// });


// all about setINterval and clear interval

// console.log("setinterval and claer interval");
//  var interval = setInterval(() => {
//     console.log(new Date().toLocaleDateString());
// }, 1000);

// setTimeout(()=>{clearInterval(interval,10000);},10000);

//call bind and apply
// console.log("call bind and apply ");

// function display(age,gender){
//     console.log("karthik");
//     console.log(this.fname);
//     console.log(age);
//     console.log(gender);
// }
// var obj1 = {
//     fname : "ravi",
//     fun : function(age,gender){
//         console.log(this.fname,age,gender);
//     }
// }

// var obj2 = {
//     fname : "suresh"
// }

// //obj1.fun.call(obj2,15,"male");
// //display.call(obj2,13,"male");
// //display.apply(obj1,[19,"femanle"])
// var a = display.bind(obj2,23,"male");
// a();

// // property flags and descriptors .
// let emp ={};
// emp.name="John";
// console.log(Object.getOwnPropertyDescriptor(emp,"name"));
// Object.defineProperty(emp,"age",
// {
//     value:21,
//     writable:true,
//     enumerable:false,
//     configurable:false
// });
// delete emp.age;
// for(let k in emp){
//     console.log(k);
// }
// //emp.age=34;
// console.log(Object.getOwnPropertyDescriptor(emp,"age"));

// all about prototype 
// console.log("all about prototype");
// let obj1 ={fname:"karthik"};
// let obj2 = {lname:"raavi"};
// obj2.__proto__ = obj1;
// console.log(obj2.fname);
// console.log(obj2);

// let obj3 = {fname:"tushar"};
// let obj4 = Object.create(obj3);
// console.log(obj4.fname);
// console.log(obj4);

// function Person(name,age) {
//     let person = Object.create(obj);
//     person.name = name;
//     person.age = age;
//     return person;
// }
 
// var obj = {
//     greet(){
//         console.log(`hello !!!!${this.name}`);
//     }
// }

// let user = Person("karthik",4);
// user.greet();
// console.log(user);

// function Person1(name,age) {
//     let person1 = Object.create(Person1.prototype);
//     person1.name = name;
//     person1.age = age;
//     return person1;
// }
 
// Person1.prototype.greet = function(){
//         console.log(`hello !!!!${this.name}`);
//     }


// let user1 = Person1("paresh",4);
// user1.greet();
// console.log(user1);

// function Employee(name,age){
//     this.name = name;
//     this.age = age;
// }

// Employee.prototype.greet = function(){
//     console.log(`hello emplyee ${this.name}`);
// }

// let emp = new Employee("lokesh",5);
// emp.greet();
// console.log(emp);

console.log("all about classes and objects");

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`hello how are you ${this.name}`);
    }
}
let p = new Person("karl",4);
p.greet();
console.log(p);
console.log(typeof Person);
console.log(Person.prototype.greet);

// Inheritance 
console.log("all about inheritance");
class Animal{
    constructor(name) {
        this.name = name;
    }
    speak(){
        console.log(`heloo this is ${this.name}`);
    }
    sings(){
        console.log(`hello iam going to sing by ${this.name}`);
    }
}
class Dog extends Animal{
    constructor(name){
        super(name);
    }
}
class Cat extends Animal{
    constructor(name){
        super(name);
    }
}

let d = new Dog("scooby");
d.sings();
d.speak();