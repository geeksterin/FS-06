// "use strict";

//contructor functions
/**
 * The only diff between normal function and an constructor fucntion is ,
 * we use the "new" operator to call the constructor fucntion.
 * A function declaration or expression can be used to create a constructor function, 
 * but arrow fucntion cannot be used , as arrow fucntion dosen't have
 * it's own "this" keyword.
 */

// const Person = function (firstName, dob) {
//example for constructor function using function expression
//   console.log(this);
//instance properties
//   this.firstName = firstName;
//   this.dob = dob;
//   console.log(this); //at this point the empty object has been manupulated using the "this" key word,before returning
/**
 * similer to properties we also can add fucntion also,but that is bad,
 *  because if a constrictor function has 1000 instance, for all the instances the same method will
 * be created thousands time.
 * we can use prototype to add functions.
 * Also to create common properties,we will use the prototype.
 */
//bad practice
//   this.calcAge = function () {
//     console.log(2022 - this.dob);
//   };
// };

// const john = new Person("john", 1222);
// console.log(john);
// console.log(Person);
/*
Person is not a class but a constructor function, but we hapily can call john an instance of person,
 we can use the "instanceof" operator to found if john is an instance of Person or not
*/
// console.log(john instanceof Person);

/**
 * calling a function with this "new" operator, there are four steps that happens
 * 1) an empty object is created ,{}
 * 2)then the function is called and the "this" keyword is pointed to that empty obj ,this = {}
 * 3)Now this newly create object is linked to a prototype,
 * will create the __proto__ property for the object and sets it's value as the protype property of the constructor function.
 * 4)at the end of that function, automattically returns the object.(so we can manupulate the object before returng using the "this keyword")
 */

//prototypes
/**
 * all the objects that are created by the Person 
 * constructor function,will get access 
 * to all the properties and function of Person's prototype
 */

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.dob);
// };
// console.log(Person.prototype);
/**
 * Here the "prototype" is the property of the Person that will be 
 * used as the prototype of all the objects that are created
 *  using that constructor,but this is not the prototype of
 * Person.
 *
 */

// john.calcAge();
// console.log(john.__proto__);
// console.log(Person.__proto__);
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.speecies = "Homo sapiens";
// console.log(john.speecies);
/**
 * "speecies" is a inheited property from it's prototype
 */

// console.log(john.hasOwnProperty("firstName")); //true because "firstName" is a instance proprty
// console.log(john.hasOwnProperty("speecies")); //false,speecies is a inheited property

//Person.prototype.constructor points back to the constructor function.
// const doe = new Person.prototype.constructor("doe", 2222);
// console.log(doe);

//this steps are same for es6 ,but not for Object.create();

// Object.prototype is the prototype of Person.prototype and john's prototype is the the Person.prototype ,this is called the protytype channing, Object.prototype's prototype is null
//so to find any properties or object js will go through the prototype chain until it find it or reaches the end(null)

//Adding properties to the prototype of an built in object such as Array is a bad idea,
//Array.prototype.newFunc()=> is bad

//challenge 1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(this.speed + " km/h");
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed + " km/h");
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// bmw.brake();
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.brake();
// bmw.brake();
// bmw.brake();
// mercedes.accelerate();
// mercedes.brake();
// mercedes.brake();
// mercedes.brake();
// mercedes.accelerate();

//es6 classes

/**
 * Under the hood also uses the constructor function
 * As classes in js are nothing but functions,we can use class expression ans decralaration both
 * classes are not hoisted
 * they are also a first-class citizen
 * class body is always executed in strict mode
 */

//class expression
//const className = class{}

//class declaration
// class Personcl {
//   constructor(firstName, dob) {
//the constructor method works similer to constructor function, but constrictor methods have to be called "constructor"
//object creation is also same
//is no cinstructor is used, a default contsurtor is used
// this.firstName = firstName;
// this.dob = dob;
//   }

//all the methods declared outside the constructor will be attached to the prototype of the object(Personcl.prototype),not to the object themseleves
//   calcAge() {
//this method is attached to the prototype of objects , not the objcet themselves
// console.log(2022 - this.firstName);
//   }
// }
// const sam = new Personcl("samiul", 12122);
// console.log(sam);
// console.log(Personcl.prototype === sam.__proto__);
/**
 * 1)classes are not hoisted
 * 2)clases are also first-class citizen(beacsuse they are just function);
 * 3)classes are executed in strict mode only
 *
 */

//getters and setters
//Every obj in js can have the setters and getters properties,
//but outside they still looks like reguler properties

// const obj = {
//   name: "samiul",
//   movement: [1, 2, 3, 4],
//   get latest() {
//to create gettters prepend function naem with "get" keyword,and call them just like properites
//     return this.movement.slice(-1).pop();
//   },
//   set latest(mov) {
//any setter , needs to have exatly one paremeter
//     this.movement.push(mov);
//   },
// };

// console.log(obj.latest);
// obj.latest = 20; //as this is functions acts as properties,we have to set it just like we set any property
// console.log(obj.latest);

//classes do have getters and setters and they works in the same way
// class Personcl {
//   constructor(firstName, dob) {
//     this.firstName = firstName;
//     this.dob = dob;
//   }

//   calcAge() {
//     console.log(2022 - this.dob);
//   }

//   get age() {
//     return 2022 - this.dob;
//   }

//   set age(val) {
//     this.dob = val;
//   }
// }

// const sam = new Personcl("samiul", 12);
// console.log(sam.age);
// sam.dob = 400;
// console.log(sam.age);
// console.log(Personcl.prototype);

//static methods in classes
//like the Array.from() method is attached to Array constrctor not in it's prototype, so [].from() will not work

// const Person = function (firstName) {
//   this.firstName = firstName;
// };

// Person.greet = function () {
//   console.log("hello");
//Now this is not attched to Person.prototype,so all object of Person,will not be able to inherit it
// };

// Person.greet();

// class Person {
//   constructor(fn) {
//     this.fn = fn;
//   }
//   static hey() {
//     console.log(this);
//   }
// }

// Person.hey();
// const sam = new Person("sa");
// sam.hey(); //error

//Object.create();
//works diff then cinstrictor function and classes, here also protypial inheritance works,but no prototype property,or constructor func or "new" operator is used
//we have to manually set the prototype of a object to any other object that we want

// const PersonProto = {
//   calcAge() {
//     if (this.age === undefined) {
//       console.log("please prove age property");
//       return;
//     }
//     console.log(2022 - this.age);
//   },

//   init(age) {
//     this.age = age;
//   },
// }; //this will be the prototype of all Person object

// const sam = Object.create(PersonProto); //now sam is a empty object whos prototype is PersonProto
// console.log(sam); //now we can maupluat "sam" object
// sam.calcAge();
// sam.age = 100; //setting prop like this is bad,instad we can define a constructor like method in the prototype, and initialize all insatnce variable, like "init";
// sam.init(30);
// sam.calcAge();

//inheritance between classes

//using constructor function

// const Person = function (firstName, dob) {
//   this.firstName = firstName;
//   this.dob = dob;
// };

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.dob);
// };

// const Student = function (firstName, dob, course) {
//   Person.call(this, firstName, dob);
//     /**
//      * when ever we create new Student , a empty object will be created ,"this" will pointing to that empty object.
//      * If we call the Person as a normal method then this will point to undefined, so we are calling the Person with call method,where
//      * we are manually setting the "this" of person to "this" of students
//      *
//      */
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype); //now instances of the Students class can inherited methods from Person.prototype
// Student.prototype = Person.prototype;

/**
 * writing Student.prototype = Person.protitype is bad,
 * as now we will not inherit from Person.
 * prototype but the prototype for student will be 
 * exatly same as the
 * prototype of Person
 */

// Student.prototype.constructor = Student
// const mike = new Student("Samiul", 17042001, "js");
// mike.calcAge();
// console.dir(mike);

//using es6 classes

// class Person {
//   constructor(firstName, dob) {
//     this.firstName = firstName;
//     this.dob = dob;
//   }
//   static sayHi(firstName) {
//     console.log(`hello from ${firstName}`);
//   }

//   calcAge() {
//     console.log(2022 - this.dob);
//   }
// }

// const p = new Person("samiul", 123);
// console.dir(p);
// p.calcAge();
// Person.sayHi(p.firstName);
// console.dir(Person);

/**
 * To inherit from parent class to children, we use the "extends" keyword
 */

// class Student extends Person {
//extends dose -> Students.prototype = Object.create(Person.prototype);
//   constructor(firstName, dob, course) {
// super(firstName, dob); //Person.call(this,firstName,dob);, now this is reposible to create "this" ,so super should be clalled in the first line
// this.course = course;
//   }
// }

// const sam = new Student("samiul", 1233, "kjs");
// sam.calcAge();

//inheitance using Object.create()

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.dob);
//   },
//   init(firstName, dob) {
//     this.firstName = firstName;
//     this.dob = dob;
//   },
// };

// const steve = Object.create(PersonProto);
// steve.dob = 2022;
// steve.calcAge();

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, dob, course) {
//   PersonProto.init.call(this, firstName, dob);
//   this.course = course;
// };

// const sam = Object.create(StudentProto);
// sam.init("samitl", 2001, "js");

// sam.calcAge();

//Encapsulation
// JS still dosen't support private members,we will implement encapsulation using some convention
//as this entire class fields concepts still in proposal,only some part of it works in google chrome
//we can use the "#" to make a field and a method private (instance)

// class Person {
//   #works = [];
//   #firstName;
//   constructor(firstName, lastName, dob) {
//     this.#firstName = firstName;
//     this.lastName = lastName;
//     this.dob = dob;
//   }

//   #privateMethod() {
//     console.log(this.#firstName);
//   }
// }

// const p = new Person("samiul", "lastname", 1222);
// console.log(p.#works); //will  throws error,as works array is private(Systax error)
// console.log(p.#firstName); //throws error
// p.#privateMethod(); //Systam error as this is private,but still chorme dosen't support private methods,and cosider this as private fields

//method chaining

// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }

//   log1() {
//     console.log(this.firstName);
//   }
// }

// class Student extends Person {
//   constructor(firstName, lastName) {
//     super(firstName);
//     this.lastName = lastName;
//   }

//   log2() {
//     console.log(this.lastName);
//     return this;
//   }
// }

// const s = new Student("samiu", "khan");
// s.log2().log1();

// if (true) {
//   let a = 10;
// }

// console.log(a);


