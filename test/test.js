import path from 'path';
import test from 'ava';
import eslint from 'eslint';
import isPlainObj from 'is-plain-obj';

test('check config is object', t => {
	const conf = require(path.join(__dirname, '../index'));

	t.plan(4);
	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.rules));
	t.true(isPlainObj(conf.env));
	t.true(isPlainObj(conf.parserOptions));
});

test('load config in eslint', t => {
	const linter = new eslint.CLIEngine({
		useEslintrc: false,
		configFile: path.join(__dirname, '../.eslintrc.yaml')
	});
	const res = linter.executeOnFiles([
		path.join(__dirname, 'code.js')
	]);

	console.log(res);

	t.plan(2);
	t.is(res.errorCount, 0);
	t.is(res.warningCount, 0);
});
