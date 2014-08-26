var Mongoose = require('mongoose'),
ObjectId = Mongoose.Schema.ObjectId;
;

exports.TeamSchema = new Mongoose.Schema({
	name : { type: String, required : true, trim: true, index: { unique: true }},
	twitter : { type: String},
	cars: [{
		_id: ObjectId, number: String, class: String, 
		drivers: [{ 
			_id: ObjectId, name: String, description: String }
			]}
		],
});