import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})


//const q = [4,5,6]
//console.log(q)

for (let i=0; i<5; i++) {
  setTimeout(function() {
    console.log(i)
  },1000)
}

const PI = 3.14;
let a = 1;

