
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , drivers = require('./routes/driver')
  , teams = require('./routes/team')
  , races = require('./routes/race')
  , http = require('http')
  , path = require('path');

var app = express();

var Mongoose = require('mongoose');
var db = Mongoose.createConnection('localhost', 'RaceTags');

var DriverSchema = require('./models/DriverSchema.js').DriverSchema,
	TeamSchema = require('./models/TeamSchema.js').TeamSchema,
	RaceSchema = require('./models/RaceSchema.js').RaceSchema;

var Driver = db.model('driver', DriverSchema),
	Team = db.model('team', TeamSchema),
	Race = db.model('race', RaceSchema);

var TodoSchema = require('./models/Todo.js').TodoSchema;
var Todo = db.model('todos', TodoSchema);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index(Todo));
app.get('/users', user.list);

app.get('/todos.json', routes.get(Todo));
app.put('/todo/:id.json', routes.update(Todo));
app.post('/todo.json', routes.addTodo(Todo));

app.get('/drivers', drivers.index(Driver));
app.get('/drivers.json', drivers.get(Driver));
app.put('/driver/:id.json', drivers.update(Driver));
app.post('/driver.json', drivers.addDriver(Driver));

app.get('/teams', teams.index(Team));
app.get('/teams.json', teams.get(Team));
app.put('/team/:id.json', teams.update(Team));
app.post('/team.json', teams.addTeam(Team));

app.get('/race', races.index(Race));
app.get('/race.json', races.get(Race));
app.put('/race/:id.json', races.update(Race));
app.post('/race.json', races.addRace(Race));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
