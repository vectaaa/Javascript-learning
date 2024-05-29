// function Person(n){
//     this.name = n
//     this.talk = function() {
//       console.log(this) 
//     }
//     setTimeout(function(){
//       console.log(this)
//       }.bind(this), 100)
// }

// const child = new Person('Gbenga')

//The this Keyword
// function talk(){
//   return `I am ${this.name}`
// }

// const me = {
//   name: 'Beecee',
//   talk
// }

// const you = {
//   name: 'Nyakno',
//   talk
// }

// console.log(me.talk())
// console.log(you.talk())


//Async Javascript
// let pizza 

// function orderPizza(){
//   console.log('Order Pizza')
  
//     pizza = '🍕'
  
//   console.log('Pizza was Ordered')
// }
// orderPizza()

// console.log(`Eat the ${pizza}`)

// function orderPizza(callback) {
//   setTimeout(() =>{
//     const pizza = '🍕'
//     callback(pizza)
//   },3000)
// }

// function pizzaReady(pizza){
//   console.log(`Eat the delivered ${pizza}`)
// }

// orderPizza(pizzaReady)
// console.log(`Call Victory`)

// window.addEventListener('click', mouseClick)

// function mouseClick(){
//   console.log('The mouse got clicked')
// }


//Synchronous example
// console.log(' i ')

// console.log(' eat ')

// setTimeout(()=>{
//   console.log(' ice-cream ')
// }, 3000)

// console.log(' with a ')

// console.log(' spoon ')


// //Callback example
// function one() {
// console.log('step 1')
// }

// function two(){
// console.log('step 2')
// }


//Introducing callbacks

const stocks = {
  Fruits: ["Strawberry", "Pineapple", "Apple", "Kolanut", "bannana"],
  Liquids: ["water","ice"],
  Holder: ["cone","cup","stick"],
  Toppings: ["chocolates","peanuts","sparkles"]
}


// console.log(stocks.Fruits[2]);

// this is responsible for taking icecream order from customer.
let order = (call_production) => {
  c
  call_production();
}

//this is responsible for ice-cream production after taking the orders.
let production = () => {


}

order(production);  