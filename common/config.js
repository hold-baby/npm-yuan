var pkg = require('../package.json');

var version = [
	'  ' + (typeof pkg.author == 'string' ? pkg.author : pkg.author.name).blue + ' - ' + 'v'.yellow + pkg.version.yellow +'',
	'  ' + pkg.description + ''
].join('\n')

module.exports = {
	"yuan" : {
		"taobao" : "https://registry.npm.taobao.org/",
		"npm" : "https://registry.npmjs.org/"
	},
	"version" : version
}