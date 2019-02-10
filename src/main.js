//const q = [4,5,6]
//console.log(q)

for (let i=0; i<5; i++) {
  setTimeout(function() {
    //console.log(i)
  },1000)
}

const PI = 3.14;
let a = 1;


// const original = function () {
//   return 100;
// }
//console.log(original());


// const arrow = (num, num2) => {
//   return 150 + num * num2;
// }

//const arrow2= (num, num2) => 150 + num * num2;
const arrow3 = num => 150 + num;

//console.log(arrow3(50))


const obj = {
  name: 'WFM',

  logName: function () {
    // var self = this;
    // setTimeout(function () {
    //   console.log('Name: ' + self.name);
    // },1000)

    setTimeout(() => {
      // Используется старый контекст
      //console.log('Name: ' + this.name);
    },1000)
  }
}

obj.logName();


const c = 90;
const c2 = () => 200;


const func = (a = 20, b = a + c2()) => {
  //undefined || 10
  //a = a || 10;
  return a + b;
}

//console.log(func(undefined, 80));
//console.log(func(30));




const name = 'WFM';
const age = 30;

// const obj2 = {
//   name: name,
//   age: age
// };
const obj2 = {name, age};
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



let obj3 = {
  name2: 'WFM 3',
  age2: 36
}

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




const array5 = [1, 2, 3, 4, 5];

// for (var i=0; i<array5.length; i++) {
//   console.log(array5[i]);
// }

// array5.forEach(function (item) {
//   console.log(item)
// });

// for (let item of array5) {
//   console.log('Item ', item);
// }

for (let item of 'ABCDFG') {
  console.log('Item ', item);
}
















