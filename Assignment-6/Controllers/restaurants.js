const { response } = require('express');
const RestaurantSchema = require('../Models/restaurants');

exports.filterRestaurants = (req, res)=>{
    let{mealtype, cuisine, location, lcost, hcost, page, sort } = req.body;

    page = page? page:1;
    sort = sort? sort:1;

    let Payload={};
    const iteamPerPage = 2;

    let startIndx = iteamPerPage * page - iteamPerPage;
    let endIndex = iteamPerPage * page;

    if(mealtype){
        Payload['type.mealtype'] = mealtype;
    }
    if(mealtype && cuisine){
        Payload['type.mealtype'] = mealtype;
        Payload['Cuisine.cuisine'] = {$in: cuisine};
    }
    if(mealtype && lcost && hcost){
        Payload['type.mealtype'] = mealtype;
        Payload['cost'] = {$lte:hcost, $gte:lcost};
    }
    if(mealtype && cuisine && lcost && hcost){
        Payload['type.mealtype'] = mealtype;
        Payload['Cuisine.cuisine'] = {$in: cuisine}
        Payload['cost'] = {$lte:hcost, $gte:lcost};
    }
    if(mealtype && location){
        Payload['type.mealtype'] = mealtype;
        Payload['locality'] = location;
    }
    if(mealtype && location && cuisine){
        Payload['type.mealtype'] = mealtype;
        Payload['locality']= location;
        Payload['Cuisine.cuisine'] = {$in: cuisine};
    }
    if(mealtype && location && lcost && hcost){
        Payload['type.mealtype'] = mealtype;
        Payload['locality']= location;
        Payload['cost'] = {$lte:hcost, $gte:lcost};
    }
    if(mealtype && location && lcost && hcost && cuisine ){
        Payload['type.mealtype'] = mealtype;
        Payload['locality']= location;
        Payload['cost'] = {$lte:hcost, $gte:lcost};
        Payload['Cuisine.cuisine'] = {$in: cuisine};
    }
    RestaurantSchema.find(Payload).sort({cost:sort}).then(response =>{
        const filteredResponse = response.slice(startIndx, endIndex);
        res.status(200).json({
            message:'Restaurants data fatched sucessfully',
            restaurants : filteredResponse
        })
    }).catch(err =>{
        res.status(400).jason({ error : err});
    })
}
