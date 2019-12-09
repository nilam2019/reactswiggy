var mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    name:String,
    address:String,
    location: LocationSchema,
    dishes:[DishSchema]
});

const Restaurant= mongoose.model('Restaurant',RestaurantSchema);

module.exports = RestaurantSchema;
   

