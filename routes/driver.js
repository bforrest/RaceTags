
exports.index = function(Driver) {
	return function(req, res) {
		Driver.find({}, function(error, drivers) {
		  res.render('driver', {
		  	title: 'Driver Listing',
		  	drivers: drivers
		  })
		});
	};
};

exports.get = function(Driver){
	return function(req, res) {
		Driver.find({}, function(error, drivers){
			res.json({ drivers : drivers });
		});
	};
};

exports.addDriver = function(Driver){
	return function(req, res) {
		var driver = new Driver(req.body);
		driver.save(function(error, driver) {
			if( error || !driver) {
				res.json({ error: error});
			} else {
				res.json({ driver: driver });
			}
		});
	};
};

exports.update = function(Driver){
	return function(req, res) {
		Driver.findOne({ _id : req.params.id}, function(error, driver) {
			if (error || !todo) {
	        res.json({ error : error });
	      } else {
	        todo.done = req.body.done;
	        todo.save(function(error, todo) {
	          if (error || !todo) {
	            res.json({ error : error });
	          } else {
	            res.json({ todo : todo });
	          }
	        });
	      }
		})
	}
};