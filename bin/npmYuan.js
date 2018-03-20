#!/usr/bin/env node

'use strict';

var program = require('commander');
var colors = require('colors');
var pkg = require('../package.json');
var config = require('../common/config.js');
var yuanSet = require('../common/cmd.js').yuanSet;
var show = require('../common/cmd.js').show;

/**
 * Module dependencies.
 */
program
  .usage("npm-yuan")
  .version(config.version, '-v, --version', pkg.version)
  .option('to', '设置taobao/npm源')
  .option('show', '显示当前npm源')
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
			console.log('请使用 npm-yuan to taobao 或 npm-yuan to npm'.red);
	}
}

/**
 * 查询当前npm源
 */
if (program.show) {
	show()
}
