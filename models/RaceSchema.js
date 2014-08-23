var Mongoose = require('mongoose');

exports.RaceSchema = new Mongoose.Schema({
	name : { type: String, required : true},
	series : { type : String, required : true },
	date : { type : Date, required : true }
});