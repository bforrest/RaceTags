var Mongoose = require('mongoose');

exports.RaceSchema = new Mongoose.Schema({
	name : { type: String, trim: true, required : true, index: { unique: true }},
	series : { type : String, required : true },
	date : { type : Date, required : true },
	teams : []
});