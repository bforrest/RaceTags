var Mongoose = require('mongoose');

exports.DriverSchema = new Mongoose.Schema({
	name : { type: String, trim: true, required: true, index: { unique: true }},
	twitter: {type: String}
});