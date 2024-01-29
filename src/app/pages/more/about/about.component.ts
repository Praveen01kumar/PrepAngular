import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, finalize, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api-service';
import { msg } from 'src/app/shared/services/error-messages';
import { SharedService } from 'src/app/shared/services/shared.service';
import { emailValidator, numNotAllowed, onlyNumAllowed, spaceNotAllowed, speCharNotAllowed } from 'src/app/shared/services/validistor';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  portfolioList: any[] = [
    { img: "assets/images/about/portfolio-01.jpg", name: "Development", likes: "600", title: "The services provide for design" },
    { img: "assets/images/about/portfolio-02.jpg", name: "Application", likes: "750", title: "Mobile app landing design & app maintain" },
    { img: "assets/images/about/portfolio-03.jpg", name: "Photoshop", likes: "630", title: "Logo design creativity & Application" },
    { img: "assets/images/about/portfolio-04.jpg", name: "Figma", likes: "360", title: "Mobile app landing design & Services" },
    { img: "assets/images/about/portfolio-05.jpg", name: "Web Design", likes: "280", title: "Design for tecnology & services" },
    { img: "assets/images/about/portfolio-06.jpg", name: "App", likes: "690", title: "App for tecnology & services" },
  ];
  experienceList: any[] = [
    { name: "sdfsd" },
    { name: "sdfsd" },
    { name: "sdfsd" },
    { name: "sdfsd" },
    { name: "sdfsd" },
    { name: "sdfsd" },
  ];
  skillList: any[] = [
    { name: "HTML", value:90, logo:"assets/skillicon/html.png", icon:'H5' },
    { name: "CSS", value:80, logo:"assets/skillicon/css.png", icon:'C3' },
    { name: "SASS", value:76, logo:"assets/skillicon/sass.png", icon:'SA' },
    { name: "Bootstrap", value:67, logo:"assets/skillicon/bootstrap.png", icon:'BT' },
    { name: "Tailwind CSS", value:67, logo:"assets/skillicon/tailwind.png", icon:'TC' },
    { name: "Javascript", value:78, logo:"assets/skillicon/javascript.png", icon:'JS' },
    { name: "Typestript", value:80, logo:"assets/skillicon/typescript.png", icon:'TS' },
    { name: "Angular", value:80, logo:"assets/skillicon/angular.png", icon:'NG' },
    { name: "Angular CLI", value:84, logo:"assets/skillicon/angular.png", icon:'AC' },
    { name: "Angular Material", value:87, logo:"assets/skillicon/material.png", icon:'AM' },
    { name: "Ag-Grid", value:54, logo:"assets/skillicon/ag_grid.png", icon:'AG' },
    { name: "PrimNG", value:32, logo:"assets/skillicon/chart.png", icon:'PG' },
    { name: "ChartJs", value:76, logo:"assets/skillicon/chart.png", icon:'CH' },
    { name: "Mchart", value:67, logo:"assets/skillicon/chart.png", icon:'MC' },
    { name: "Highcharts", value:56, logo:"assets/skillicon/chart.png", icon:'HC' },
    { name: "JSON", value:54, logo:"assets/skillicon/json.png", icon:'JN' },
    { name: "Git", value:65, logo:"assets/skillicon/git.png", icon:'GT' },
    { name: "Github", value:45, logo:"assets/skillicon/github.png", icon:'GH' },
    { name: "Node.js", value:82, logo:"assets/skillicon/node_js.png", icon:'ND' },
    { name: "Expres.js", value:65, logo:"assets/skillicon/express_js.png", icon:'EX' },
    { name: "Nest.js", value:74, logo:"assets/skillicon/node_js.png", icon:'NS' },
    { name: "MySQL", value:87, logo:"assets/skillicon/mysql.png", icon:'MQ' },
    { name: "PhpmyAdmin", value:59, logo:"assets/skillicon/node_js.png", icon:'PM' },
    { name: "MongoDB", value:56, logo:"assets/skillicon/mongodb.png", icon:'MD' },
    { name: "Sequelizejs", value:80, logo:"assets/skillicon/node_js.png", icon:'SQ' },
    { name: "Sequelize cli", value:76, logo:"assets/skillicon/node_js.png", icon:'SL' },
    { name: "TypeORM", value:34, logo:"assets/skillicon/node_js.png", icon:'TO' },
    { name: "Gitlab", value:87, logo:"assets/skillicon/gitlab.png", icon:'GL' },
    { name: "Bitbucket", value:45, logo:"assets/skillicon/bitbucket.png", icon:'BK' },
    { name: "Slack", value:87, logo:"assets/skillicon/slack.png", icon:'SK' },
  ];
  allright: Date = new Date;
  connectForm!: FormGroup;
  sub: boolean = false;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.userConnectForm();
  }

  userConnectForm() {
    this.connectForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16), numNotAllowed, speCharNotAllowed]],
      phonenumber: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14), onlyNumAllowed]],
      email: ['', [Validators.required, spaceNotAllowed, Validators.email, emailValidator]],
      subject: ['', [Validators.required, Validators.minLength(8)]],
      message: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get f() { return this.connectForm?.controls }

  onConnect() {
    this.sub = true;
    if (this.connectForm?.invalid) { return; }
    const fval = this.connectForm?.value;
    const payload = { name: fval?.name, phonenumber: fval?.phonenumber, email: fval?.email, subject: fval.subject, message: fval?.message }
    this.isLoading = true;
    this.apiService.connectmail(payload).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe({
      next: (val: any) => {
        if (val?.status) {
          this.sharedService.snake({ message: val?.message });
          this.connectForm?.reset();
          this.sub = false;
        } else {
          this.sharedService.snake({ message: val?.message });
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.sharedService.snake({ message: error?.error?.message });
      }
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }


  // window.onresize = () => console.log("height: ", window.innerWidth, "px");
  // window.onresize = () => window.innerWidth;
  // console.log(window.innerWidth);

  // es 6 features list.

  // Arrow functions
  // Let and const keywords
  // Template literals
  // Destructuring
  // Default parameters
  // Rest parameters
  // Spread operator
  // Classes
  // Promises
  // Modules
  // Iterators
  // Generators
  // Symbols
  // Sets and Maps
  // Template strings
  // Enhanced object literals
  // Shorthand object properties
  // Computed object properties
  // Object.assign() method
  // Array.from() method
  // Array.of() method
  // Array.prototype.find() method
  // Array.prototype.findIndex() method
  // Typed arrays
  // Proxy objects
  // Reflect API
  // Tail call optimization
  // Async/await functions
  // Unicode support
  // Math and Number improvements

  // most used features

  // Arrow functions
  // Template literals
  // Destructuring
  // Let and const keywords
  // Default parameters
  // Rest parameters
  // Spread operator
  // Classes
  // Promises
  // Modules

  // ====================================================== Arrow functions =====================================================
  // syntax 
  // () => expression
  // param => expression
  // (param) => expression
  // (param1, paramN) => expression

  // example 1
  // let para = 8;
  // let with_retun_key = (a:any) => { 
  //   return a + 100;
  // };
  // console.log('() => { return expression}', with_retun_key(para)); //output 108;

  // example 2
  // let para = 8;
  // let without_retun_key = (a:any) => a + 100;
  // console.log('() => expression', without_retun_key(para)); //output 108;

  // example 3
  // let para = 8;
  // let without_retun_key_parameter_parentheses = a => a + 100; //may will give incorrect in typescript
  // console.log('a => a + 100', without_retun_key_parameter_parentheses(para)); //output 108

  // example 4
  // let val1 = 8;
  // let val2 = 8;
  // let without_parameter = () => val1 + val2 + 100;
  // console.log('() => val1 + val2 + 100', without_parameter()); //output 116

  //example 5
  // this.arrowtest();
  // note 
  // we can define it inside of any function also 
  // no need return key for singale line expression 

  // ===================================================== Template literals ====================================================
  //     syntax 
  // `string text`
  // `string text line 1
  //  string text line 2`
  // `string text ${expression} string text`

  // example 1
  // console.log("string text line 1\n" + "string text line 2"); //in older way 
  // // output
  // // "string text line 1
  // // string text line 2"

  // console.log(`string text line 1
  // string text line 2`); // in es 6 using template literal syntax
  // // output 
  // // "string text line 1
  // // string text line 2"

  // example 2
  //     const a = 5;
  //     const b = 10;
  //     console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + "."); //in older way 
  //     // output 
  //     // "Fifteen is 15 and
  //     // not 20."

  //     console.log(`Fifteen is ${a + b} and
  // not ${2 * a + b}.`); // in es 6 using template literal syntax
  //     // "Fifteen is 15 and
  //     // not 20."

  // ======================================================== Destructuring ==================================================

  // syntax

  // let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  // let obj = { a: 10, b: 20, c: 30, d: 40, e: 50, f: 60, g: 70, h: 80, i: 90, j: 100 };

  // [a, b] = array;
  // [a, , b] = array;
  // [a = aDefault, b] = array;
  // [a, b, ...rest] = array;
  // [a, , b, ...rest] = array;
  // [a, b, ...[c, d]] = array;
  // [a, b, ...[c, d, ...[e, f]]] = array;

  // ({ a, b } = obj); // brackets are required
  // ({ a: a1, b: b1 } = obj);
  // ({ a: a1 = aDefault, b = bDefault } = obj);
  // ({ a, b, ...rest } = obj);
  // ({ a: a1, b: b1, ...rest } = obj);

  // example 1 
  // const [y, x] = array;
  // console.log(y); // output 10
  // console.log(x); // output 20

  // example 2
  // const [y, , x] = array;
  // console.log(y); // output 10
  // console.log(x); // output 30

  // example 3
  // const [y = 60, x] = array; if in array first item will be empty like [ , 20, 30, 40, 50]; then output will be 60 it will not work for (null, NaN, '',"") only work for (undefined, )
  // console.log(y); // output 10,    
  // console.log(x); // output 20

  // example 4
  // const [y, x, ...rest] = array; //...rest must be in the last element (...) is rest oprator
  // console.log(y); // output 10
  // console.log(x); // output 20
  // console.log(rest); // output [30, 40, 50]

  // example 5
  // const [y, , x, ...rest] = array;
  // console.log(y); // output 10
  // console.log(x); // output 30
  // console.log(rest); // output [40, 50]

  // example 6
  // //  swaping two number 
  // let a = 1;
  // let b = 3;
  // [a, b] = [b, a];
  // console.log(a); // output 3
  // console.log(b); // output 1

  // example 7
  // const [w, x, ...[y, z]] = array;
  // console.log(w); // output 10
  // console.log(x); // output 20
  // console.log(y); // output 30
  // console.log(z); // output 40
  // console.log(...[y, z]); // output 30 40
  // console.log([y, z]); // output [30, 40]

  // example 8
  // const [w, x, ...[y, z, ...[p, q]]] = array;
  // console.log(w); // output 10
  // console.log(x); // output 20
  // console.log(y); // output 30
  // console.log(z); // output 40
  // console.log(...[y, z, ...[p, q]]); // output 30 40 50 60
  // console.log([y, z, ...[p, q]]); // output [30, 40,50,60]
  // console.log(...[p, q]); // output 50 60
  // console.log([p, q]); // output [50, 60]

  //  example 9 
  // const { a, b } = obj;
  // console.log(a); // output 10
  // console.log(b); // output 20
  // console.log({ a, b }); // output { "a": 10,"b": 20 }

  // example 10
  // const { a: a1, b: b1 } = obj;
  // console.log(a1); // output 10
  // console.log(b1); // output 20
  // console.log({ a: a1 }); // output { "a": 10}
  // console.log({ b: b1 }); // output { "b": 20}
  // console.log({ a: a1, b: b1 }); // output { "a": 10,"b": 20 }

  // example 11
  // const { a: a1 = 70, b = 80 } = obj; if in obj item will be undefined like { a: undefined, b: 20, c: 30, d: 40, e: 50 }; then it will work and if item will be (null, NaN, '',"") if will not work
  // console.log(a1); // output 10
  // console.log({ a: a1 }); // output { "a": 10}   
  // console.log(b); // output  20
  // console.log({ a: a1, b }); // output { "a": 10,"b": 20 }

  // example 12
  // const { a, b, ...rest } = obj;
  // console.log(a); // output 10
  // console.log(b); // output 20
  // console.log(rest); // output  { "c": 30, "d": 40, "e": 50, "f": 60, "g": 70, "h": 80, "i": 90,"j": 100 }

  // example 13
  // const { a: a1, b: b1, ...rest } = obj;
  // console.log(a1); // output 10
  // console.log(b1); // output 20
  // console.log({ a: a1 }); // output { "a": 10}
  // console.log({ b: b1 }); // output { "b": 20}
  // console.log(rest); // output  { "c": 30, "d": 40, "e": 50, "f": 60, "g": 70, "h": 80, "i": 90,"j": 100 }

  // ================================================================= Let and const keywords ========================================

  // Let and const keywords
  // syntax

  // this.varTest();
  // this.letTest();

  //======================================================================= Default parameters ============================================ 

  // Example 1
  // this.test(2, 3); 
  // output typeof a number
  // typeof b number
  // a+b 5
  // a: 2 b: 3

  // Example 2
  // this.test(2, 'we'); 
  // typeof a number
  // typeof b string
  // a+b 2we
  // a: 2 b: we

  // Example 3
  // this.test(2, null); 
  // typeof a number
  // typeof b object
  // a+b 2
  // a: 2 b: null

  // Example 4
  // this.test(2, undefined); 
  // typeof a number
  // typeof b number
  // a+b 7
  // a: 2 b: 5

  // Example 5
  // this.test(2, ); 
  // typeof a number
  // typeof b number
  // a+b 7
  // a: 2 b: 5

  //============================================================== Rest parameters ====================================================

  //syntax 
  // function f(a, b, ...theArgs) {
  //   // …
  // }

  //wrong parameters
  // function wrong1(...one, ...wrong) {}
  // function wrong2(...wrong, arg2, arg3) {}

  // this.sum(1,2,3,4,5);

  //============================================================== Optional parameters ====================================================
  //syntax
  //  function f(a:any, b?:any) {}

  // this.optional(23, 34); //output 57
  // this.optional(2); //output NaN

  //====================================================================== Spread operator ===============================================
  //syntax

  // const array1 = [1, 2, 3];
  // const array2 = [4, 5, 6];
  // let newarr: any;

  //way three 
  // for (let i = 0; i < array2.length; i++) {array1.push(array2[i])};
  // newarr = array1;
  // console.log(newarr); //output [1, 2, 3, 4, 5, 6]

  // //way two 
  // array2.forEach((as:any) => array1.push(as));
  // newarr = array1;
  // console.log(newarr); //output [1, 2, 3, 4, 5, 6]

  // way one 
  // newarr = array1.concat(array2);
  // console.log(newarr); //output [1, 2, 3, 4, 5, 6]

  //way four 
  // newarr = [...array1, ...array2];
  // console.log(newarr); //output [1, 2, 3, 4, 5, 6]

  // spread in objects 
  // const obj = { a: "x", b: "y" };
  // const obj2 = { sdfsdf:'sdfsdf', ...obj, sfsd:'sdfsdf' };
  // console.log(obj2);

  // const obj1 = { a: 1, b: 2 }
  // const obj2 = { c: 3, d: 4 }
  // const merge = { ...obj1, ...obj2 };
  // console.log(merge); // output {a:1, b:2, c:3, d:4}

  // spread in strings 
  // const name = "JavaScript";
  // const arrayOfStrings = [...name];
  // console.log(arrayOfStrings);//[ "J","a", "v", "a", "S","c", "r", "i", "p", "t"]

  //========================================================= Classes =======================================================================

  //syntax
  // class is structured object.
  // class Rectangle {
  //   constructor(height, width) {
  //     this.height = height;
  //     this.width = width;
  //   }
  // }


  //================================================================================== Promises =======================================================================

  // Promises are the foundation of asynchronous programming in modern JavaScript.A promise is an object 
  // returned by an asynchronous function, which represents the current state of the operation.At the time 
  // the promise is returned to the caller, the operation often isn't finished, but the promise object provides 
  // methods to handle the eventual success or failure of the operation.

  // Async/await is a newer syntax in JavaScript that was introduced in ES2017 (ES8) and provides a way to write asynchronous code that is more readable and easier to understand compared to using promises.
  // Promises, on the other hand, were introduced in ES2015 (ES6) and provide a way to handle asynchronous code in JavaScript. Promises are objects that represent the result of an asynchronous operation and can be in one of three states: pending, fulfilled, or rejected.
  // Here are some differences between async/await and promises:
  // Syntax: Async/await uses a more concise syntax compared to promises, making code more readable.
  // Error handling: Promises use a .catch() method to handle errors, while async/await uses a try/catch block.
  // Flow control: Async/await allows for better flow control compared to promises since it uses the await keyword to pause the execution of code until the promise resolves.
  // Readability: Async/await can make code more readable since it eliminates the need for chaining .then() methods with promises.
  // In summary, async/await and promises are both used to handle asynchronous code in JavaScript. Async/await provides a more concise and readable syntax compared to promises, and allows for better flow control.

  // syntax
  // promises
  // console.log( fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error(error)));

  //async/await
  // async function fetchData() {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // fetchData();

  //================================================================================== Modules =======================================================================
  //syntax

  // To export a variable, function, or class from a module, you use the export keyword:

  // myModule.js
  // export const myVariable = 42;

  // export function myFunction() {
  //   console.log("Hello, world!");
  // }

  // export class MyClass {
  //   // ...
  // }

  //To import a variable, function, or class from a module, you use the import keyword:

  // main.js
  // import { myVariable, myFunction, MyClass } from './myModule.js';

  // console.log(myVariable); // 42
  // myFunction(); // Hello, world!
  // const instance = new MyClass();



  // You can also use the default keyword to export a default value from a module, which can be imported without braces:

  // myModule.js
  // export default function() {
  //   console.log("Hello, world!");
  // }

  // // main.js
  // import myFunction from './myModule.js';
  // myFunction(); // Hello, world!

  //================================================================================== Iterators =======================================================================
  //syntax

  // 1.array

  // const myArray = [1, 2, 3];
  // const iterator = myArray[Symbol.iterator]();
  // console.log(iterator.next()); // { value: 1, done: false }
  // console.log(iterator.next()); // { value: 2, done: false }
  // console.log(iterator.next()); // { value: 3, done: false }
  // console.log(iterator.next()); // { value: undefined, done: true }

  //2. string
  // const myString = "Hello, world!";

  // const iterator = myString[Symbol.iterator]();
  // console.log(iterator.next()); // { value: "H", done: false }
  // console.log(iterator.next()); // { value: "e", done: false }
  // console.log(iterator.next()); // { value: "l", done: false }
  // console.log(iterator.next()); // { value: "l", done: false }
  // console.log(iterator.next()); // { value: "o", done: false }
  // console.log(iterator.next()); // { value: ",", done: false }
  // console.log(iterator.next()); // { value: " ", done: false }
  // console.log(iterator.next()); // { value: "w", done: false }
  // console.log(iterator.next()); // { value: "o", done: false }
  // console.log(iterator.next()); // { value: "r", done: false }
  // console.log(iterator.next()); // { value: "l", done: false }
  // console.log(iterator.next()); // { value: "d", done: false }
  // console.log(iterator.next()); // { value: "!", done: false }
  // console.log(iterator.next()); // { value: undefined, done: true }

  //Custom objects:
  // const myObject = {
  //   data: [1, 2, 3],
  //   [Symbol.iterator]() {
  //     let index = 0;
  //     return {
  //       next: () => {
  //         if (index < this.data.length) {
  //           return { value: this.data[index++], done: false };
  //         } else {
  //           return { value: undefined, done: true };
  //         }
  //       }
  //     };
  //   }
  // };

  // const iterator = myObject[Symbol.iterator]();
  // console.log(iterator.next()); // { value: 1, done: false }
  // console.log(iterator.next()); // { value: 2, done: false }
  // console.log(iterator.next()); // { value: 3, done: false }
  // console.log(iterator.next()); // { value: undefined, done: true }

  //================================================================================== Generators =======================================================================

  // varTest() {
  //   // var x = 1; {var x = 2; console.log(x); } console.log(x); output 2 2

  //   // var x;
  //   // console.log(x); // output undefined

  //   // console.log(x); // output undefined
  //   // var x;

  //   // for (var i = 1; i <= 10; i++) {
  //   //   setTimeout(() => { console.log(i) }, 1000);
  //   // }


  // }

  // letTest() {
  //   // let x = 1; {let x = 2; console.log(x); } console.log(x); output 2 1

  //   // let x;
  //   // console.log(x); // output undefined

  //   // console.log(x); // output Cannot access 'x' before initialization
  //   // let x;

  //   // for (let i = 1; i <= 10; i++) {
  //   //   setTimeout(() => { console.log(i) }, 1000);
  //   // }

  // }

  // arrowtest() {
  //   // const a = { b: "abcd", c: () => this.b,};
  //   // console.log(a.c()); // output undefined
  //   // const x = { y: "abcd", z: function () {return this.y; }, };
  //   // console.log(x.z()); // output abcd
  // }

  // test(a, b = 5) {
  //   console.log('typeof a', typeof a);
  //   console.log('typeof b', typeof b);
  //   console.log('a+b', a + b);
  //   console.log('a:', a, 'b:', b);
  // }

  //  sum(...theArgs:any[]) {
  //   let total = 0;
  //   for (let arg of theArgs) {
  //     total += arg;
  //   }
  //   console.log(total);
  // }

  // optional(a: any, b: any) {
  //   console.log(a + b);
  // }

  // optional(a: any, b?: any) {
  //   console.log(a + b);
  // }

}
