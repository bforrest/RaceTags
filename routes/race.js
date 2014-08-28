exports.index = function(Race){
	return function(req, res){
		Race.find({}, function(error, races) {
			res.render('race', {
				title: "Race Events",
				races: races
			})
		})
	};
};

exports.get = function(Race){
	return function(req, res){
		Race.find({}, function(error, races){
			res.json({races: races});
		});
	};
};

exports.addRace = function(Race){
	return function(req,res){
		var race = new Race(req.body);
		race.save(function(error, race) {
			if( error || !race){
				res.json({error:error});
			} else {
				res.json({race : race});
			}
		});
	};
};

exports.update = function(Race){
	return function(req,res) {
		Race.findeOne({ _id: req.params.id}, function(error, race) {
			if(error || !race){
				res.json({ error : error });
			} else {
				race.save(function(error, race) {
					if(error || !race){
						res.json({error: error});
					} else {
						res.json({ race : race });
					}
				});
			};
		});
	};
};