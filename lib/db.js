var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports.mongoose = mongoose;
module.exports.Schema = Schema;
// Connect to cloud database
var username = "user";
var password = "password";
var address = '@ds039088.mongolab.com:39088/jumpstart';
connect();
// Connect to mongo
function connect() {
	var url = 'mongodb://' + username + ':' + password + address;
	mongoose.connect(url);
}
function disconnect() {
	mongoose.disconnect()
}