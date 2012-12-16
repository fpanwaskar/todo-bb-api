var restify = require('restify'),
	mongoose = require('mongoose'),
	todos = require('./routes/todos'),
	config = require('./config').config;
 
mongoose.connect('mongodb://' + config.mongo.uri + '/' + config.mongo.db);

var server = restify.createServer({
  name: 'todos-api',
  version: '0.0.1'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.post('/todos/complete', todos.complete);
server.get('/todos', todos.getAll);
server.get('/todos/:id', todos.getById);
server.del('/todos/:id', todos.delete);
server.post('/todos', todos.save);

var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});