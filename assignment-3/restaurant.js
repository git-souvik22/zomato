// ******************************* 1st question *******************************
class restaurantManager {

   restaurantList = [];
 
   addRestaurant(name, address, city) {
     const restaurantObject = {
       restaurantName: name,
       restaurantAddress: address,
       restaurantCity: city
     };
     this.restaurantList.push(restaurantObject);
   }
 
   printAllRestaurantNames() {
     return this.restaurantList.map((restaurant) => restaurant.restaurantName );
   }
 
   filterRestaurantByCity(cityName) {
     return this.restaurantList.filter((restaurant) => restaurant.restaurantCity === cityName );
   }
 };
 
 // Create an instance of the restaurant manager
 const manager = new restaurantManager();
 
 // Add restaurants to the manager
 manager.addRestaurant("DOMINOS", "123 Main St", "Sotpur");
 manager.addRestaurant("KFC", "456 Elm St", "Kolkata");
 manager.addRestaurant("MOTHER'S HUT", "789 Oak St", "Krishnagar");
 manager.addRestaurant("KOZEE KUTHEER", "528 High St", "Dignagar");
 
 // Print all restaurant names
 const restaurantNamesArray = manager.printAllRestaurantNames();
 console.log(restaurantNamesArray);
 
 // Filter restaurants by city
 const filteredRestaurants = manager.filterRestaurantByCity("Krishnagar");
 console.log(filteredRestaurants);
 

// ******************************* 2nd question *******************************
orderData = { 
   'Below 500': 20, 
   '500-1000': 29, 
   '1000-1500': 30, 
   '1500-2000': 44, 
   'Above 2000': 76 
};

//a
const orderValues = Object.values(orderData);
// console.log(orderValues);

const total = orderValues.reduce((prev, next) => prev + next);
console.log(total);

//b
const orderKeys = Object.keys(orderData);
console.log(orderKeys.length);

//c
const restaurantArray = []; // declaring an empty array

const arrayOfObjects = orderKeys.map((items, index) => {
   const obj = {
      'id': index + 1,
      'order': items,
      'order percentage': ((orderData[items]/total) * 100).toFixed(2),
      'restaurant': "Punjabi Tadka"
   }
   restaurantArray.push(obj);
});

console.log(restaurantArray);
