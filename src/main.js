//const q = [4,5,6]
//console.log(q)

// for (let i=0; i<5; i++) {
//   setTimeout(function() {
//     //console.log(i)
//   },1000)
// }
//
// const PI = 3.14;
// let a = 1;


// const original = function () {
//   return 100;
// }
//console.log(original());


// const arrow = (num, num2) => {
//   return 150 + num * num2;
// }

//const arrow2= (num, num2) => 150 + num * num2;
// const arrow3 = num => 150 + num;

//console.log(arrow3(50))


// const obj = {
//   name: 'WFM',
//
//   logName: function () {
//     // var self = this;
//     // setTimeout(function () {
//     //   console.log('Name: ' + self.name);
//     // },1000)
//
//     setTimeout(() => {
//       // Используется старый контекст
//       //console.log('Name: ' + this.name);
//     },1000)
//   }
// }
//
// obj.logName();
//
//
// const c = 90;
// const c2 = () => 200;
//
//
// const func = (a = 20, b = a + c2()) => {
//   //undefined || 10
//   //a = a || 10;
//   return a + b;
// }

//console.log(func(undefined, 80));
//console.log(func(30));



//
// const name = 'WFM';
// const age = 30;

// const obj2 = {
//   name: name,
//   age: age
// };
// const obj2 = {name, age};
//console.log(obj2);


// const createPerson = (name, surname, fieldName, filedPostfix) => {
//   const fullname = name + ' ' + surname;
//   const person = {
//     fullname,
//     name,
//     surname,
//     getJob() {
//       return 'Front End';
//     }
//   };
//   let finalFieldName = fieldName + filedPostfix;
//   person[finalFieldName] = 50;
//   return person;
// }
//
// const person = createPerson('WFM', 'WFM2', 'car', '-name');
// console.log(person)


// const createPerson = (name, surname, fieldName, filedPostfix) => {
//   const fullname = name + ' ' + surname;
//   return {
//     fullname,
//     name,
//     surname,
//     getJob() {
//       return 'Front End';
//     },
//     [fieldName + filedPostfix]: 100
//   };
// }
//
// const person = createPerson('WFM', 'WFM2', 'car', '-model');
// console.log(person)



// let obj3 = {
//   name2: 'WFM 3',
//   age2: 36
// }

// let name2 = obj3.name2;
// let age2 = obj3.age2;

// Если название переменной совпадает с ключем в обьекте, можно писать так
//let {name2, age2} = obj3;
//let {age2} = obj3;
//console.log(name2, age2);

//
// let {name2: n, age2: e} = obj3;
// console.log(n, e);
//
//
// let array = ['WFM 2', 35, 'red 2'];
// let array2 = ['WFM 2', 35];
//
// // let name4 = array[0];
// // let age4 = array[1];
// // let color4 = array[2];
//
// let [name4,, color4] = array;
// let [,, color5='red'] = array2;
//
// console.log(color5);



// function logStings(num, str, str2, str3) {
//   console.log(num ,str, str2, str3);
// }
// logStings(20, 'WFM', 'WFM2', 'WFM3');

// function logStings2(num) {
//   var args = Array.prototype.slice.call(arguments);
//   console.log(num , args);
// }
// logStings2(20, 'WFM', 'WFM2', 'WFM3', 'WFM4');


// rest - оставшиеся параметры в функции
// function logStings3(num, ...args) {
//   console.log(num , args);
// }
// logStings3(20, 'WFM', 'WFM2', 'WFM3', 'WFM4');

// Spread разворачивает массив в такую конструкцию
// function logStings3(num, ...args) {
//   console.log(num , args);
// }
// let spreadArray = ['WFM', 'WFM2', 'WFM3', 'WFM4']
// logStings3(20, ...spreadArray);



// let name6 = 'WFM';
//let str1 = 'Hello ' + name6 +', glad to \'see\' you!';
// let str1 = `Hello '${name6}', glad to see "you"! ${5+10}`;

// let html = `
//   <div>
//     <h1>${name}</h1>
//     <span>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, officiis!
//       </p>
//     </span>
//   </div>
// `;
// console.log(html);




// const array5 = [1, 2, 3, 4, 5];

// for (var i=0; i<array5.length; i++) {
//   console.log(array5[i]);
// }

// array5.forEach(function (item) {
//   console.log(item)
// });

// for (let item of array5) {
//   console.log('Item ', item);
// }

// for (let item of 'ABCDFG') {
//   console.log('Item ', item);
// }






// function Car(name) {
//   this.name = name;
// }
//
// Car.prototype.logName = function () {
//   console.log(this.name);
// };
//
// let car = new Car('Audi');
// car.logName();


// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//
//   logName() {
//     console.log(this.name);
//   }
//
//   static staticFunc() {
//     console.log('I am static!');
//   }
// }
//
// let car = new Car('BMW');
// //car.logName();
// console.log(car.logName === Car.prototype.logName)
// Car.staticFunc();

//
// class Car {
//   constructor(name) {
//     console.log('Car constructor');
//     this.name = name;
//   }
//
//   logName() {
//     console.log('Car name is: ', this.name);
//   }
// }
//
// class BMW extends Car {
//   constructor(name) {
//     super(name);
//
//     console.log('BMW constructor')
//   }
//
//   logName() {
//     super.logName();
//   }
//
// }
//
// let bmw = new BMW('x6');
// bmw.logName();




//
//
// let set = new Set();
//
// set.add(10);
// set.add('Hello');
// set.add({});
// set.add(10);
// set.add(10);
// set.add(10);
//
// console.log(set.size);
//
//
// let set2 = new Set([1, 2, 2, 3, 3, 4, 5, 5]);
// console.log(set2.size);
//
//
// let set3 = new Set().add(2).add(3).add(4).add(6);
// console.log('Set size', set3.size);
// console.log('Set has', set3.has(3));
// console.log('Set delete', set3.delete(3));
// console.log('Set size', set3.size);
// console.log('Set has', set3.has(3));
// console.log('Set clear', set3.clear());
// console.log('Set size', set3.size);
//
//
// let set4 = new WeakSet();
//
// let key = {};
// set4.add(key);
// console.log(set4.size);
// key = null;
// console.log(set4.size)


//
// let map = new Map();
//
// map.set('name', 'WFM');
// map.set('age', 20);

// console.log(map);
// console.log(map.get('name'));
//
// let obj1 = {};
// let obj2 = {};
//
// map.set(obj1, 10);
// map.set(obj2, 50);
//
// console.log('Size', map.size);
// console.log('Has', map.has(obj2));
// console.log('Delete', map.delete(obj2));
// console.log('Size', map.size);
// console.log('Has', map.has(obj2));
//
//
// let map2 = new Map([
//   ['name', 'WFM'],
//   ['age', 20],
// ]);
//
// console.log(map2);
//
// for (let val of map2.values()) {
//   console.log('Values: ', val);
// }
// for (let key of map2.keys()) {
//   console.log('Keys: ', key);
// }
// for (let entr of map2.entries()) {
//   console.log(`${entr[0]} - ${entr[1]}`);
// }
//
//
// let map3 = new WeakMap();
// let key2 = {};
// map3.set(key2, 'key2');
// console.log('Size', map3.size);
// key2 = null;
// console.log('Size', map3.size);
//


// import * as extra from './extra';
// console.log(extra);

// import {name, age} from './extra';
// console.log(name, age);

// import {age as a} from './extra';
// console.log(a);



// import {func} from "./extra";
// func();

// import func from './extra';
// func();


// import Car from './extra';
// var car = new Car();


// Symbol - для создания уникальных полей

let s = Symbol('WFM');

let s2 = Symbol('1');
let s3 = Symbol('1');

console.log(typeof s);

console.log(s2 === s3);


let s4 = Symbol('field');
let s5 = Symbol('field');

let obj = {
  age: 20,
  [s4]: 'WFM'
};

console.log(obj);
console.log(obj[s4]);

console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));


let num = 1;
let str = '1';
let array = [1, 2];
let obj3 = {name: 'WFM'};

console.log('Number', typeof num[Symbol.iterator]);
console.log('String', typeof str[Symbol.iterator]);
console.log('Array', typeof array[Symbol.iterator]);
console.log('Object', typeof obj3[Symbol.iterator]);


// Принцип работы for of

function createIterator(arr) {
  let cont = 0;
  return {
    next () {
      return cont < arr.length
        ? {value: arr[cont++], done: false}
        : {value: undefined, done: true}
    }
  }
}

let iter = createIterator([1, 2, 3, 4]);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


// fibonachi

let fib = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next () {
        [pre, cur] = [cur, cur + pre];
        return {value: cur, done: false};
      }
    }
  }
};

for (let n of fib) {
  if (n > 1500) break;
  console.log(n);
}












