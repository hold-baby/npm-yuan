var cmd = require('node-cmd');
var config = require('./config.js');

var yuanSet = function (yuan){
	var npm = cmd.get("npm config set registry " + config.yuan[yuan], function(err, data){
		if(err) console.log(err)
		console.log(config.yuan[yuan])
	})
}

var show = function(){
	var npm = cmd.get("npm config get registry", function(err, data){
		if(err) console.log(err)
		console.log(data)
	})
}

module.exports = {
	yuanSet : yuanSet,
	show : show
}