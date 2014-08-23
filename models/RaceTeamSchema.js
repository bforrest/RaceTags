var Mongoose = require('mongoose');

exports.RaceTeamSchema = new Mongoose.Schema({
	name : { type: String, required : true},
	twitter : { type: String},
	cars: [{
		_id: ObjectId, number: String, class: String, 
		drivers: [{ 
			_id: ObjectId, name: String, description: String }
			]}
		]},
});