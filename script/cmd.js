var cmd = require('node-cmd');
var colors = require('colors');

var yuan = require("./yuan")

var yuanSet = function (target){
	if(!!target && !!yuan[target]){
		cmd.get("npm config set registry " + yuan[target], function(err, data){
			if(err) console.log(err)
			console.log(yuan[target].yellow)
		})
	}else{
		const keys = Object.keys(yuan);
		console.log(`请使用 npm-yuan to ${keys.join("/")} 来切换数据源`.red);
	}
}

var show = function(){
	cmd.get("npm config get registry", function(err, data){
		if(err) console.log(err)
		console.log(data.replace("\n", "").yellow)
	})
}

module.exports = {
	yuanSet : yuanSet,
	show : show
}