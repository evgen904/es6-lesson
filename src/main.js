//const q = [4,5,6]
//console.log(q)

for (let i=0; i<5; i++) {
  setTimeout(function() {
    console.log(i)
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

console.log(arrow3(50))


const obj = {
  name: 'WFM',

  logName: function () {
    // var self = this;
    // setTimeout(function () {
    //   console.log('Name: ' + self.name);
    // },1000)

    setTimeout(() => {
      // Используется старый контекст
      console.log('Name: ' + this.name);
    },1000)
  }
}

obj.logName();










