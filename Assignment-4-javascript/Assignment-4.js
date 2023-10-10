
// 1. Please find customer's rating data for multiple restaurants as : 

let ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
]

// a. Calculate the Average rating for all the restaurants. 

const uniqueRestaurants = Array.from(new Set(ratingData.map(({restaurant}) => restaurant)));
var arr = [];
uniqueRestaurants.map(restaurantName =>{
    const filterdratingData = ratingData.filter(obj => obj.restaurant == restaurantName);

    let outputobj = {
        restaurant : restaurantName,
        averageRating : filterdratingData.reduce((prev, next) => prev + next.rating,0) / filterdratingData.length
    }
    arr.push(outputobj);
});
console.log(arr);

// b. List of all restaurants with average rating greater than or equal to 4.

const secondoutput = arr.filter(iteam => iteam.filterdratingData >=4);
console.log(secondoutput);
