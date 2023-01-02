const restaurant = {
name:"NIv Rahamim",
assdress:"blfur 27",
city:"Tel-Aviv",
state:"center of israel",
zipcode:610025,
} 
console.log(restaurant);

 let fullAssdress = `${restaurant.assdress},${restaurant.state},${restaurant.zipcode}`
console.log(fullAssdress);

restaurant.color = 'red';
console.log(restaurant);

restaurant.city = "kfar-tavor";