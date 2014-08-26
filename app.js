
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , driver = require('./routes/driver')
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

app.get('/drivers', driver.index(Driver));
app.get('/drivers.json', driver.get(Driver));
app.put('/driver/:id.json', driver.update(Driver));
app.post('/driver.json', driver.addDriver(Driver));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
