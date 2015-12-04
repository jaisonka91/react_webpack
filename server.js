var express = require('express')
var app = express()

// app.set('view engine', 'jade');

app.use(express.static(__dirname + '/dist'));
// app.use(express.static(__dirname + '/node_modules'));
 
// app.get('/', function (req, res) {
// 	res.render(__dirname + '/dist')
// });
 
app.listen(3040, function(){
	console.log('listening to localhost:3040');
});