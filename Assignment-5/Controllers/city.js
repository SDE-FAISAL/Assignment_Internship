const city = require('../Models/City.json');

exports.getCityList = (req, res) =>{
    const result = city.map(iteam => iteam.name);
    res.status(200).json({
        message: 'city data loaded sucessfully',
        city: result
    })
}
