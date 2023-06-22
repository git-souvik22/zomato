const ratingData = [
  { restaurant: 'KFC', rating: 5 },
  { restaurant: 'Burger King', rating: 4 },
  { restaurant: 'KFC', rating: 3 },
  { restaurant: 'Domino', rating: 2 },
  { restaurant: 'Subway', rating: 3 },
  { restaurant: 'Domino', rating: 1 },
  { restaurant: 'Subway', rating: 4 },
  { restaurant: 'Pizza Hut', rating: 5 }
];

// Solution a. *****************************************************************

// creating 2 new Map objects to add restaurant names with the Sum of their ratings and Number of ratings in each restaurants
const sumOfRatings = new Map();
const numberOfRantings = new Map();

ratingData.forEach(data => {
  const restaurant = data.restaurant;
  const rating = data.rating;

  // if sumOfRatings have/don't have restaurant name previously then accordingly it will return a boolean value and increment/add the Sum of ratings and Number of ratings for each restaurants.
  if (sumOfRatings.has(restaurant)) {
    sumOfRatings.set(restaurant, sumOfRatings.get(restaurant) + rating);
    numberOfRantings.set(restaurant, numberOfRantings.get(restaurant) + 1);
  } else {
    sumOfRatings.set(restaurant, rating);
    numberOfRantings.set(restaurant, 1);
  }
});

// creating a blank array to push the restaurant names and the calculated average ratings into this array
const averageRatings = [];

sumOfRatings.forEach((sum, restaurant) => {
  const count = numberOfRantings.get(restaurant);
  const averageRating = sum / count;
  averageRatings.push({ restaurant: restaurant, averageRating: averageRating });
})

console.log(averageRatings); // print all the restaurant names along with there calculated average ratings




// Solution b. *******************************************************************

// creating a blank array to push the "averageRatings" rating those are greater than or equal to 4.
const rateGreaterThan4 = [];

averageRatings.map((rates) => {
  const averageRate = rates.averageRating;
  const restaurantNames = rates.restaurant;

  // if the average ratings are greater than or equal to 4 then push those ratings along with their restaurant names to the "rateGreaterThan4" Array
  if (averageRate >= 4) {
    rateGreaterThan4.push({ restaurant: restaurantNames, averageRating: averageRate });
  }

})

console.log(rateGreaterThan4); // print all the restaurant names along with there average ratings those are greater than or equal to 4.