exports.index = function(Team){
	return function(req, res) {
		Team.find({}, function(error, teams) {
			res.render('team', {
				title : "Race Teams",
				teams : teams
			})
		})
	};	
};

exports.get = function(Team){
	return function(req, res) {
		Team.find({}, function(error, teams) {
			res.json({ teams: teams});
		});
	};
};

exports.addTeam = function(Team){
	return function(req, res) {
		var team = new Team(req.body);
		team.save(function(error, team) {
			if( error || !team){
				res.json({ error: error });
			}else{
				res.json({ team: team });
			}
		});
	};
};

exports.update = function(Team){
	return function(req, res) {
		Team.findOne({ _id: req.params.id}, function(error, team) {
			if(error || !team){
				res.json({ error: error });
			} else {
				team.save(function(error, team) {
					if( error || !team){
						res.json({ error: error });
					} else {
						res.json({ team: team });
					}
				});
			};
		});
	};
};