"use strict";
// const obj = {
//   name: "samiul",
//   innerObj: {
//     innerName: "khan",
//   },
// };
// const copy = obj;
// copy.name = "wjhfgwej";
// copy.innerObj.innerName = "jewgriuew";
// console.log(obj);
// console.log(copy);
// const deepCopy = { ...obj };
// console.log(obj);
// console.log(deepCopy);
// deepCopy.name = "jkwjwekh";
// console.log(obj);
// console.log(deepCopy);
// deepCopy.innerObj.innerName = "ewrgeiwur";
// console.log(obj);
// console.log(deepCopy);
// {
//   p1: nfkjw,
//     p2: jbrkjq,
//     p3: ewjbkjwe,
//     p4: {
//   }
// }
// const arr1 = [1, 2, 3, 4, 5];
// const copy = arr1;
// copy[4] = 1000;
// console.log(arr1);
// console.log(copy);
// const arr1 = [[1, 2, 3], [4, 5, 6], 5, 6, 7, 8, 9];
// const copy = [ ...arr1 ];
// copy[0][1] = 10000;
// console.log(arr1);
// console.log(copy);
// const obj = {
//   name: "samiul",
//   innerObj: {
//     innerName: "khan",
//   },
//   func() {},
// };
// const deepCopy = JSON.parse(JSON.stringify(obj));
// deepCopy.innerObj.innerName = "wurgiu";
// console.log(obj);
// console.log(deepCopy);
// const arr = [[1, 2, 3], [4, 5, 6], 3, 4, 5, 6, function () {}];
// const deepCopy = JSON.parse(JSON.stringify(arr));
// console.log(arr);
// deepCopy[0][2] = 32868237;
// console.log(deepCopy);
// const deepCopy = structuredClone(arr);
// deepCopy[0][1] = 10000;
// console.log(arr);
// console.log(deepCopy);
// let obj = {
//   point: obj,
// };
// const clone = structuredClone(obj);
// console.log(clone);
// let a = 10;
// let b = 200;
// function swap(p1, p2) {
//   let temp = p1;
//   p1 = p2;
//   p2 = temp;
// }
// swap(a, b);
// console.log(a);
// console.log(b);
// const obj1 = {
//   name: "samiul",
// };
// const obj2 = {
//   name: "uehriwue",
// };
// obj1 = ->>>>>>>> Identuty(obj1);
// obj2 = ->>>>>>>> Identuty(obj2);
// p1 ->>>>>>>> Identuty(obj1);
// p2 ->>>>>>>> Identuty(obj2);
// p1 = ->>>>>>>> Identuty(obj2);
// p2 =  ->>>>>>>> Identuty(obj1);
// function swap(p1, p2)  // p1.name = "ewthwieh";
//   let temp = p1;
//   p1 = p2;
//   p2 = temp;
// }
// swap(obj1, obj2);
// console.log(obj1);
// console.log(obj2);
// console.log("sam");
// var a = 100;
// function state() {
//   var r = 100;
//   function abc() {
//     var n = 1000;
//     var jb = 1883
//   }
//   var hhh = 1000;
//   abc();
//new execution context abc will be created
//   r: 100
//   function() {
//   }
//   hhh:1000
// }
// state();
//new execution context
// var oo = 100;
// function dgduq() {}
// a: 100;
// function state() {}
// oo: udefine;
// function dgduq() {}
// --- global execution context;
//f1();
//-->global execution context
// function f1()
// {
//   function inf1() {
//     function innf1() {
//     }
//   }
//   inf1();
// }
// function func() {
//   --
//     ---
//       --
// }
// var a = 10;
// function func() {
//   var a = 10;
//   jhkjw
//   klh
//   a: 10
// }
// func();
// f1()
// F2();
// f3();
// -
//   -
// -
// -
// -
//
// var func =
// func:function () {
// }
// function func() {
//   console.log("i am in func");
// }
// func();
// console.log("i am global executon context");
//callstack
//LIFO
// ee
// ge
// var a = ;
// a: jhri;
// "undefined" is a placeholder that says that this variable has been alocated some memomry in the memory block
// function func() {
// }
// function func() {
// }
// console.log(a); //'undefined'
// console.log(func);
// var a = 10;
// function func() {
//   console.log("i am here");
// }
// a: 10
// function func(){
//   console.log("i am here");
// }
// var a = 10;
// a: "undefined"
// console.log(e);
// let e = 10;
// console.log(e);
// console.log(d);
// let d = 10;
// let c = 100;
// let few = 1000;
// e: 10
// d: undefined
// console.log(jhewgrweu);
//restrcited memomy
// e: 10
// console.log(a);
// let a;
// Memory(lexicle env) = varibale env(stores all varible and functions) + lexicle scope(points to the parents memory)
// closures are nothing but functions paried with it's lexicle env;
// var a = 10;
// var b = 20;
// function f1() {
//   var c = 200;
//   var d = 4000;
//   function inner() {
//   }
// }
// function outer() {
//   var a = 10;
//   function show() {
//     console.log(a);
//   }
//   return show;
// }
// const func = outer();
// func();

// var a = 100;

// function func() {
//   var b = 10000;
// }

// console.log(b);
// var a = 1000000;
// function func() {
//   var a = 100;

//   function child() {
//     var b = 1000;
//     console.log(a);
//   }

//   child();
//   console.log(b);
// }

// func();
// let a = 1000;
// let b = 100;
// if (true) {
//   let a = 1000;
//   let b = 100;
// }

// if (true) {
//   console.log("jsdfks");
//   console.log("fnkwnf");
// }
// f1;

// function HOF1(cb) {}
// function HOF2() {
//   return function () {};
// }

// function HOF3(cb) {
//   return function () {};
// }
// map
// filter
// reduce
// console.log("I am Array.proto");

// console.log(Array.prototype);
// console.log("I am [].__proto");
// console.log([].__proto__);
// const arr = [];
// arr.map();
// const nums = [1, 2, 3, 4, 5, 6, 7];
// const newNums = nums.map((num) => num + 10);
// console.log(newNums);

// const obj = {
//   name: "samiul",
//   func() {
//     console.log(this);
//   },
// };

// console.log(obj.func());
// function func() {
//   console.log(this);
// }

// func();
// window.func();
// [].myMap();

// Array.prototype
// [].__proto__;
// this = val;
// polly

//MY MAP IMPLEMENTATION
// const nums = [1, 2, 3, 4, 5, 6, 7];
// const newNums = nums.map((num) => num + 10);
// console.log(newNums);

// Array.prototype.myMap = function (cb) {
//   const arr = this;
//   const newArr = [];
//   for (let num of arr) {
//     newArr.push(cb(num));
//   }

//   return newArr;
// };
// console.log(Array.prototype);

// const newArrayUsingMyMap = nums.myMap((num) => num + 10);
// console.log(newArrayUsingMyMap);

//MY FILTER IMPLEMENTATION
// const nums = [-1, 2, -3, 4, -5, 6, -7];
// const filteredArrayUsingDefault = nums.filter((num) => {
//   if (num > 0) return true;
//   return false;
// });

// console.log(filteredArrayUsingDefault);

// Array.prototype.myFilter = function (cb) {
//   const arr = this;
//   const filteredArray = [];
//   for (let num of arr) {
//     if (cb(num)) {
//       filteredArray.push(num);
//     }
//   }

//   return filteredArray;
// };
// const filteredArrayUsingMyFilter = nums.myFilter((num) => num > 0);
// console.log(filteredArrayUsingMyFilter);

//MY REDUCE IMPLEMENTATION

// function func(a = 0, b = 0) {
//   console.log(a, b);

//   return a + b;
// }

// console.log(func());

// const nums = [1, 2, 3, 4, 5, 6, 7];
// const sum = nums.reduce((acc, curr) => acc + curr, 10);
// console.log(sum);

// console.log(Array.prototype);
// Array.prototype.myReduce = function (cb, initialValue = 0) {
//   const arr = this;
//   let acc = initialValue;
//   for (let num of arr) {
//     acc = cb(acc, num);
//   }

//   return acc;
// };

// const sumUsingMyReducer = nums.myReduce((acc, curr) => acc + curr, 10);
// console.log(sumUsingMyReducer);
// "use strict";
// var a = 10;
// var a = 10;
// console.log(a);
// let private = 10;
// console.log(private);

//"THIS" keyword

// console.log(this);
// console.log(window);
// console.log(console);
// window.console.log(this);

// const ob1 = {
//   name: "obj1",
//   obj2: {
//     name: "obj2",
//     obj3: {
//       name: "obj3",
//       func() {
//         console.log(this);
//       },
//     },
//   },
// };

// ob1.obj2.obj3.func();

// function func() {
//   console.log(this);
// }
// func();

// window.func();

// const obj = {
//   name: "samiul",
//   func() {
//     console.log(this);
//   },
//   outer() {
//     function inner() {
//       console.log(this);
//     }
//     inner();
//   },
// };
// obj.func();
// obj.outer();

// const obj3 = {
//   name: "samiul",
//   titles: ["weqw", "werwe", "weew"],
//   func() {
//     this.titles.forEach((title) => {
//       console.log(this.name, title);
//     });
//   },
// };

// obj3.func();

// function HOF(cb) {
//   cb();
//   console.log(this, "HOF");
// }

// HOF(function () {
//   console.log(this, "cb");
// });

// console.log(this);
// function func() {
//   console.log(this);
// }
// func();

// const obj = {
//   name: "obj",
//   func() {
//     console.log(this);
//   },
//   outer() {
//     function inner() {
//       console.log(this);
//     }

//     inner();
//   },
// };
// obj.func();
// obj.outer();

// const obj3 = {
//   name: "samiul",
//   titles: ["weqw", "werwe", "weew"],
//   func() {
//     this.titles.forEach((title) => {
//       console.log(this.name, title);
//     });
//   },
// };
// obj3.func();

// function HOF(cb) {
//   cb();
//   console.log(this, "HOF");
// }

// HOF(function () {
//   console.log(this, "cb");
// });

// const obj = {
//   name: "obj",
//   func(arg1, arg2, arg3) {
//     console.log(this.name, arg1, arg2, arg3);
//   },
// };
// obj.func();
// const ob2 = {
//   name: "obj2",
// };

// call,apply,bind
// obj.func.call(ob2, "dj", "roar", "ewew");

// Function.prototype.myCall = function (context, ...args) {
//   context.myRef = this;
//   context.myRef(...args);
// };
// Function.prototype.myCall = function (context, ...args) {
//   this.apply(context, args);
//   const bindedMethod = this.bind(context, ...args);
//   bindedMethod();
// };

// obj.func.myCall(ob2, "dj", "roar", "ewew");
// console.log(ob2);
// obj.func.apply(ob2, ["dj", "roar", "ewew"]);
// Function.prototype.myApply = function (context, args) {
//   context.onRef = this;
//   context.onRef(...args);
// };

// Function.prototype.myApply = function (context, args) {
//   this.call(context, ...args);
//   const bindedMethod = this.bind(context, ...args);
//   bindedMethod();
// };

// obj.func.myApply(ob2, ["dj", "roar", "ewew"]);
// console.log(ob2);
// const bindedFunc = obj.func.bind(ob2, "efkwj", "weew");
// bindedFunc("ewer");
// Function.prototype.myBind = function (context, ...args) {
//   const func = this;
//   return function (...parems) {
//     func.call(context, ...args, ...parems);
//   };
// };
// const bindedFuncCustom = obj.func.myBind(ob2, "efkwj", "weew");
// bindedFuncCustom("rewree");
// console.dir(Function.prototype);

// function func() {}
// console.dir(func.__proto__);
// const obj = {};
// console.dir(obj);

// const arr = [];
// console.dir(arr);

// function ZYZ(firstName, lastName) {
//   //{};
//   //this = {}
//   //this.__proto__ = ZYZ.prototype
//   this.firstName = firstName;
//   this.lastName = lastName;
//   //return this;
// }
// console.dir([]);
// // new Array();
// // []
// // this = [];
// // this.__proto__ = Array.prototype.__proto__ = Object.prototype;
// // return this;

// // console.dir(Human.prototype);

// // Human.prototype.constructor = Human;

// // const obj = {};
// // obj.name = "samiul";

// const samiul = new Human("samiul", "khan");
// console.log(samiul.__proto__);

// 4)
// 1){ };
// 2)this = {};
// 3) this.__proto__ = Human.prototype;
// 4) return the obj; (automatically);

// [].map();
// Array.prototype.map();
// []
// this = []
// this.__proto__ = Array.prototype
// this.map = function (cb) {
//     return
// }
// []
// []
// []

// function Human(firstName, lastName) {
//instance property
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// Human.prototype.meth = function () {
//   console.log("wjbfkjwe");
// };

// Human.prototype.meth = function () {
//     c
// }

// const obj = {};
// obj.name = "sdfks"

// function Sate() {

// }
// const H = function () {

// }

// const G = () => {};

// new G();

// const samiul = new Human("samiul", "Khan");

// const rakhesh = new Human("Rakhesh", "wjfwjf");
// console.log(samiul);
// console.log(rakhesh);
// samiul.meth();

//ES6 classes
// 1)they are not hoisted
// 2)strict mode
// 3)FCC

// class Human {}

// function HOF(Human) {
//     console.dir(Human);
//     class Animal{

//     }

//     return Animal
// }

// console.dir(HOF(Human));

// classs
//instance property
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   meth() {
//     console.log(this);
//   }
//   set firstName(n1) {
//     this._firstName = n1;
//   }
//   get getName() {
//     return this.firstName;
//   }
//   set setName(n1) {
//     this.firstName = n1;
//   }
// }

// this.__proto__ = Human.prototype
// const superman = new Human("Superman", "Das");
// console.log(superman.getName);
// superman.setName = "samiul";
// console.log(superman);
// superman.firstName = "eirhewirewhi";
// console.log(superman);

// superman.meth();

//Object.craete();
// const HumanProto = {
//   name: "human proto",
//   meth() {},
// };

// const samiul = Object.create(HumanProto);
// {
//     __proto__:HumanProto
// }
// samiul.firstName = "samiul";
// samiul.lastName = "khan";
// console.log(samiul);

// Array.from();
// [].from();
// const list = document.querySelectorAll(".jbfjk");
// const arr = Array.from(list);

// function Cons() {}
// Cons.meth = function () {
//   console.log("i am static");
// };
// const h = new Cons();
// Cons.meth();
// h.meth();
// h = { klkr, wefkwej, whfweh, __proto__: constructor.prototype }
// h.som
// class Human {
//   static sayHi() {
//     console.log("Hi");
//   }
// }

// const sam = new Human();
// Human.sayHi();
// sam.sayHi();
