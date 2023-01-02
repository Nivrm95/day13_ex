// //ex0_1//
// let obj1 = {
//     name: "Niv",
//     age: 27,
//     grade: "A",
//     classes: ["SPORT","MUISC","Math",]
//     }
// console.log(obj1);

// ///2//
// let book = {
//     title: "Harry Potter", 
//     author: "J. K. Rowling", 
//     year: 5,
//     genre: "fantasy", 
//     publisher: "nivs", 
//     pages: 150,
//     isbn: 500,
//     }
// book.rating = 5;
// console.log(book);

// //3//
// const car = {
//     make: "Tesla",
//     model: "Model S",
//     year: 2020,
//     color: "Red",
//     features: ["Autopilot", "Ludicrous Mode", "Supercharging"]
//    };
   
// console.log(car.features[1]);

// //4//
// let store = {
//     name: "Niv's Phone",
//     location: "Tal-Aviv",
//     categories:["Phone","Accessories"], 
//     products:[  { name: "IPHONE 11", price: 3, quantity: 1 },
//                 { name: "IPHONE 12", price: 4, quantity: 2 },
//                 { name: "IPHONE 13", price: 2, quantity: 3 },
//             ], 
//     };

// function MyProducts (arr) {
//     let sum = 0;
//     for (let i = 0; i < store.products.length; i++) {
//         if (store.products[i].name === (arr)){
//         sum = store.products[i].price * store.products[i].quantity;
//         return "This is the price for the product: " + sum;
//         }
//     }
//     return  "Does not exist"
// }   

// console.log(MyProducts("IPHONE 12"));

// //Ex1_1+2//
   
//  let list = {
//         weight: 60,
//         age: 27,
//         height: 65,
//     }
// function MyList(){
// console.log (length.list)
// }
// MyList(list);

// //3//
// let client = "John";

// const groceries = {
//     fruits : ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice : "20$",
//     other : {
//         paid : true,
//         meansOfPayment : ["cash", "creditCard"]
//     }
// }

// function displayGroceries (){
// console.log (groceries.fruits)
// }
// displayGroceries();

// function cloneGroceries (){
//     let user = client;
//     user = 'betty'

//     let shopping = groceries;
//     shopping.totalPrice= "35$";
//     shopping.paid = false;
// }
// cloneGroceries();
// console.log(cloneGroceries);


//Ex2//
// let book1 = {
//     items: [
//    {title: "The road not taken by anna up", alreadyRead: false},
//    {title: "To know how to live by gray lol", alreadyRead: true},
//    {title: "The damage by tom kim", alreadyRead: false}
//   ]}
  
//   function readABook(x){
//     for(let i =0 ; i<x.items[i].length;i++){
//     if (x.items[i].alreadyRead){
//         console.log(`You already read "${x.items[i].title}"`);
//     }
//     else{
//         console.log(`You still need to read "${x.items[i].title}"`);
//     }
//   }}
//   readABook(book1);
  
// //Ex3////Help?
// let myPenguin = {
//     name:"Whiteblack",
//     origin:"Whiteblack the Penguin Sees the World",
//     author:"H. A. Rey and Margret Rey",
//     Information:"Children's book about a travelling penguin",
// };
// console.log(myPenguin)
// console.log(`Hello, I'm a penguin and my name is ${myPenguin.name}!`)

// myPenguin['canFly'] = false

// myPenguin['chirp'] = function(){
//     console.log ("CHIRP CHIRP! Is this what penguins sound like?")
// };
// myPenguin.chirp();


// //Ex4//
// myPenguin['favoriteFoods'] = ["Hamburger","French fries", "pizza"];

// console.log(myPenguin.favoriteFoods[1]);

// myPenguin['firstFavFood'] = myPenguin.favoriteFoods[0];

// console.log(myPenguin.firstFavFood);

// myPenguin.favoriteFoods.push("pasta");

// console.log(myPenguin.favoriteFoods.length);

// let myPenguin1 = myPenguin
// console.log(myPenguin1)
// myPenguin1.favoriteFoods[myPenguin.favoriteFoods.length - 1] = 'pineapples'
// console.log(myPenguin.favoriteFoods);

// myPenguin['lastFavFood'] = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1];


// for ( i=0; i<length.favoriteFoods; i++){
//     console.log(myPenguin.favoriteFoods[i]);
//     }


// //Ex5//
// const gunter = {
//     name: "Gunter",
//     origin: "Adventure Time",
//     canFly: false,
//     sayHello: function () {
//       console.log("QUACK!!!");
//     },
//   };
  
//   const ramon = {
//     name: "Ramón",
//     origin: "Happy Feet",
//     canFly: true,
//     sayHello: function () {
//       console.log("Estoy encantado de conocerle.");
//     },
//   };
  
//   const fred = {
//     name: "Fred",
//     origin: "Sitting Ducks",
//     canFly: false,
//     sayHello: function () {
//       console.log("Hi there!");
//     },
//   };
  
// let penguins = {names: [`${gunter.name}`,`${ramon.name}`,`${fred.name}`]};
// console.log(penguins.names);

// let firstPenguin = penguins.names[0];
// console.log(firstPenguin);

// let secondPenguin = penguins.names[1];

// let last = penguins.names.length
// console.log(penguins.names[last-1]);

// penguins.names.push(myPenguin.name);

// console.log(penguins.length);

// myPenguin.canFly = true;

// penguins[0].sayHello = function(){
// console.log(`Hello`)
// };

// for (i = 0; i < penguins.length; i++) {
// console.log(penguins[i].name);
// }  

// for (let i = 0; i < penguins.length; i++) {
// penguins[i].sayHello();
// }

// for (let i = 0; i < penguins.length; i++) {
// penguins[i].numberOfFeet = 2;
// }

// for (let i = 0; i < penguins.length; i++) {
// penguins[i].canFly? 
// console.log(`${penguins[i].name} fly!`):
// console.log('No fly');
// }

