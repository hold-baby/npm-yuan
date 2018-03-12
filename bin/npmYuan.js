var program = require('commander');
var pkg = require('../package.json');
var config = require('../common/config.js');
var yuanSet = require('../common/cmd.js').yuanSet;
var show = require('../common/cmd.js').show;

/**
 * Module dependencies.
 */
program
  .version(pkg.version, '-v, --version')
  .option('to', 'yuan')
  .option('show', 'show')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);
 
/**
 * 镜像设置
 */
if (program.to) {
	var args = program.args;
	switch(args[0]){
		case 'taobao':
			yuanSet(args[0])
			break;
		case 'npm':
			yuanSet(args[0])
			break;
		default:
			console.log('default')
	}
}

/**
 * 查询当前npm源
 */
if (program.show) {
	show()
}
