const express = require('express');

var cityListControlers = require('../Controllers/city');
var RestaurantsControlers = require('../Controllers/restaurants');

const router = express.Router();

router.get('/getCityList',cityListControlers.getCityList);
router.get('/getRestaurantsByCityName/:cityname', RestaurantsControlers.getRestaurantsByCityName);

module.exports= router;