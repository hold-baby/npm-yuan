var pkg = require('../package.json');

var version = [
	'  ' + (typeof pkg.author == 'string' ? pkg.author : pkg.author.name).blue + ' - ' + 'v'.yellow + pkg.version.yellow +''
].join('\n')

module.exports = version