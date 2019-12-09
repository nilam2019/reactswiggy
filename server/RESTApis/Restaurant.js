var router = express.Router();
var mongoose = require("mongoose");
var RestaurantSchema = require("./../models/Restaurant");

const Restaurant = mongoose.model('Restaurant','RestaurantSchema');

router.get("/",function(req,res))



module.exports = router;