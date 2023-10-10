const express = require('express');

const restaurantsController = require('../Controllers/restaurants');
const router = express.Router();

router.post('/filterRestaurants',restaurantsController.filterRestaurants );

module.exports = router;