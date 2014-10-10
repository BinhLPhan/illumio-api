// This connection is created once when the server is started
// Since node is single-threaded and all requests handled in async
// callbacks, all connections' handlers use the same exported
// db object
var monk = require('monk');
var db = monk('localhost:27017/illumio');
db.get('users').index('username', {unique: true});
module.exports = db;
