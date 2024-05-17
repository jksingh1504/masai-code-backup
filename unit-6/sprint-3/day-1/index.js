const mongoose = require("mongoose");

//model/schema

const movieSchema = new mongoose.Schema({
	title: {type:String,required:true},
	"release-year": {type:Number,required:true},
	duration: {type:String,required:true},
	genre: {type:String,required:true}
});

const movieModel = mongoose.model("movie", movieSchema);

module.exports = { movieModel };
