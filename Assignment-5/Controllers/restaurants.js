const Restaurants = require('../Models/restaurants.json');

exports.getRestaurantsByCityName = (req, res) =>{
    const cityName = req.params.cityname;
    const result = Restaurants.filter(iteam => iteam.city_name === cityName);
    res.status(200).json({
        message:"Restaurants list by city Name fatched sucessfully",
        Restaurants:result
    })
}