// Arrow function in js
// const sum = (a, b) => a + b;

// Class
// function Course (name, price) {
//     this.name = name;
//     this.price = price;

//     this.getName = () => {
//         return this.name;
//     }
//     const isSuccess = true;
// }

// ==>
// class Course {
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     getName() {
//         return this.name;
//     }

//     getPrice(){
//         return  this.price;
//     }
// }

// const phpCourse = new Course('PHP', 1000);
// const jsCourse = new Course('JavaScript', 2000);

// console.log(phpCourse.getName());

// Default parameter value
// function logger(log) {
//     if(typeof log === 'undefined') {
//         log = 'Gia tri mac dinh'
//     }
//     console.log(log);
// }
// logger(undefined)

// ==>
// function logger(log = 'Gia tri mac dinh') {
//   console.log(log);
// }
// logger(undefined)

// ==> or
// function logger(log, isAlert) {
//   if (isAlert) return alert(log)
//   console.log(log);
// }
// logger("Message...", true);

// Enhanced object literals

// var name = 'JavaScript';
// var price = 1000;

// var course = {
//     name,
//     price,
//     getName() {
//         return name
//     }
// };

// console.log(course.getName());

// var fieldName = 'new-name';
// var fieldPrice= 'price';

// Tuỳ biến để get data
// const course = {
//     name: 'JavaScript',
//     [fieldName]: 'JavaScript',
//     [fieldPrice]: 1000
// }
// console.log(course);

// Destructuring
// Use with Array
// var array = ['JavaScript', 'PHP', 'Ruby'];

// var a = array[0];
// var b = array[1];
// var c = array[2];
// ==>
// var [a, b , c] = array;

// console.log(a,b,c);

// var [a, ...rest] = array;

// console.log(a);
// console.log(rest);

// Use with Object
// var course = {
//     name: 'JavaScript',
//     price: 1000,
//     image: 'image-address',
//     children: {
//         name: 'JS',
//     }
// }

// var {name,  price} = course;
// console.log(name , price);

// var {name, ...rest} = course;
// console.log(name , rest);

// var {name: parentName, children: {name: childrenName}} = course;
// console.log(parentName , childrenName);

// set value default
// var course = {
//   name: "JavaScript",
//   price: 1000,
//   image: "image-address",
// };
// var {name, description = 'default description'} = course;
// console.log(name, description);

// Toán tử rest
// function logger(...parameter){
//     console.log(parameter);
// }
// logger(1,2,3,4,5,6,7,8);

// Spread

// Array with Spread
// var array1 = ['Java', 'PHP', 'Python'];
// var array2 = ['ReactJS', 'Dart', 'Angular'];
// var array3 = [...array2, ...array1];
// console.log(array3);

// Object with Spread
// var object1 = {
//     name: 'JavaScript',
// }
// var object2 = {
//     price: 1000,
// }
// var object3 = {
//     ...object1,
//     ...object2
// }
// console.log(object3);

// Taged template literals

// function highlight([first,...strings],...values){
//     return values.reduce(
//         (acc,curr) =>[...acc, `<span class="highlight">${curr}</span>`, strings.shift()],[first]
//     ).join('');
// }

// var brand = 'F8';
// var course = 'JavaScript';
// var html = (highlight`Học lập trình ${course} tại ${brand}`);
// document.querySelector('.print').innerHTML = html;

// Modules
// import logger , {TYPE_LOG, TYPE_WARN, TYPE_ERROR} from "./logger.js";

// logger('Test message ...',TYPE_LOG);

// Optional chaining ?.

const obj = {
  name: "Alice",
  cat: {
    name: "Dinah",
    cat2: {
        name: "Dinah 2",
      },
  },
  cat3: {
    name: "Dinah 3",
  },
};

console.log(obj?.cat?.cat2);
