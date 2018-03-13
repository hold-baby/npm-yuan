var pkg = require('../package.json');

var version = [
	'/**!',
	' * ' + pkg.author + ' - v' + pkg.version +'',
	' * ' + pkg.description + '',
	'*/',
	''
].join('\n')

module.exports = {
	"yuan" : {
		"taobao" : "https://registry.npm.taobao.org/",
		"npm" : "https://registry.npmjs.org/"
	},
	"version" : version
}