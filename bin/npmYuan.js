#!/usr/bin/env node

'use strict';

var program = require('commander');
var colors = require('colors');
var pkg = require('../package.json');
var version = require('../script/version');
var yuanSet = require('../script/cmd').yuanSet;
var show = require('../script/cmd').show;
var yuan = require("../script/yuan")

/**
 * program
 */
program
  .usage("npm-yuan")
  .version(version, '-v')
  .option('to', '设置npm源')
  .option('show', '显示当前npm源')
  .parse(process.argv);
 
/**
 * 镜像设置
 */
if (program.to) {
	var args = program.args;
	var target = args[0];
	yuanSet(target)
}

/**
 * 查询当前npm源
 */
if (program.show) {
	show()
}