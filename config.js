var config = {
	'mongo': { 'uri': 'localhost', 'db': 'test'} 
};

if ( process.env.NODE_ENV === 'TEST') {
	config.mongo.uri = 'todosAdmin:p455w0rd@linus.mongohq.com:10069';
	config.mongo.db = 'app10099545';
}

exports.config = config;