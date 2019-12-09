var mongoose = require ("mongoose");

const DishSchema = new mongoose.Schema({

name:String,
price:Number,
isveg:Boolean

});
const Dish = mongoose.model('Dish',DishSchema);

module.exports = Dish;
