import fs from 'fs';
import path from 'path';
import test from 'ava';
import eslint from 'eslint';
import isPlainObj from 'is-plain-obj';

const hasRule = (errors, ruleId) => errors.some(x => x.ruleId === ruleId);

function runEslint(str, conf) {
	const linter = new eslint.CLIEngine({
		useEslintrc: false,
		configFile: tempWrite.sync(JSON.stringify(conf))
	});

	return linter.executeOnText(str).results[0].messages;
}

test('check config is object', t => {
	const conf = require(path.join(__dirname, '../index'));

	t.plan(4);
	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.rules));
	t.true(isPlainObj(conf.env));
	t.true(isPlainObj(conf.parserOptions));
});

test('load config in eslint', t => {
	const
		linter = new eslint.CLIEngine({
			useEslintrc: false,
			configFile: path.join(__dirname, '../.eslintrc.yaml')
		}),
		code = fs.readFileSync(path.join(__dirname, 'code.js'));

	t.is(linter.executeOnText(code).errorCount, 0);
});
