# eslint-config-handsome

[![Build Status][ci-img]][ci-url]
[![Code coverage][cov-img]][cov-url]
[![Code GPA][rate-img]][rate-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![Peer Dependency Status][peer-dep-img]][peer-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

🤘Handsome ESLint [shareable config][eslint-shareable-config]. Enforces strict and readable code.🤘

## Rules

This config aims to improve code readability which is good for team collaboration. So it's a little bit strict but not too much.  
The details are more cumbersome, not one by one description here. You could find detailed rules in the code.

Here are some basic rules about stylistic:

- __Tab indentation__ - You can control width personalized ["Why tabs are superior"](http://lea.verou.me/2012/01/why-tabs-are-clearly-superior/).
- __One true brace style with single line allowed__
- __Single-quotes__ - Except to avoid escaping.
- __No unused variables__ - This one catches tons of bugs!
- __Semicolons__ - By default. But there may be a config to support no semicolons.
- __Space after keyword__ - `if (condition) {}`
- __Space after function name__ - `function name (arg) { ... }`
- __No space in array bracket__ - `const arr = [1, 2, 3]`
- __Always space in block__ - `const obj = { foo: 'bar' }`
- __Always `===` instead of `==`__
- __Always handle the node.js err function parameter__

## Install

By npm:

```shell
npm i eslint-config-handsome --save-dev
```

By yarn:

```shell
yarn add -D eslint-config-handsome
```

## Usage

Shareable configs are designed to work with the `extends` feature of [ESLint configuration files][eslint-config-file] or `eslintConfig` field in `package.json` file.
You can learn more about [Shareable Configs][eslint-shareable-config] on the official ESLint website.

After install `eslint-config-handsome` package, there's 2 ways to active it:

- by `package.json` file
- by ESLint configuration file

### `package.json` file

Add this to your `package.json` file:

```json
{
	"eslintConfig": {
		"extends": "handsome"
	}
}
```

### ESLint configuration file

Add this to your ESLint configuration file such as `.eslintrc`:

```json
{
	"extends": "handsome"
}
```

## Badge

Use this in one of your projects? Include one of these badges in your README file to let people know that your code is using the handsome style.

[![badge](https://img.shields.io/badge/code%20style-handsome-brightgreen.svg?_=1)](https://github.com/poppinlp/eslint-config-handsome)

```markdown
[![badge](https://img.shields.io/badge/code%20style-handsome-brightgreen.svg)](https://github.com/poppinlp/eslint-config-handsome)
```

[![flat badge](https://img.shields.io/badge/code%20style-handsome-brightgreen.svg?style=flat-square)](https://github.com/poppinlp/eslint-config-handsome)

```markdown
[![flat badge](https://img.shields.io/badge/code%20style-handsome-brightgreen.svg?style=flat-square)](https://github.com/poppinlp/eslint-config-handsome)
```

## History

- 0.2.4: Set `warn` to `no-implied-eval`
- 0.2.3: Add new rules
- 0.2.1: Bump eslint to 4.x and add new rules
- 0.1.0: Init version

[eslint-shareable-config]:http://eslint.org/docs/developer-guide/shareable-configs
[eslint-config-file]:http://eslint.org/docs/user-guide/configuring#configuration-file-formats

[ci-img]:https://img.shields.io/travis/poppinlp/eslint-config-handsome.svg?style=flat-square
[ci-url]:https://travis-ci.org/poppinlp/eslint-config-handsome

[cov-img]:https://img.shields.io/coveralls/poppinlp/eslint-config-handsome.svg?style=flat-square
[cov-url]:https://coveralls.io/github/poppinlp/eslint-config-handsome?branch=master

[rate-img]:https://img.shields.io/codeclimate/github/poppinlp/eslint-config-handsome.svg?style=flat-square
[rate-url]:https://codeclimate.com/github/poppinlp/eslint-config-handsome

[dep-img]:https://img.shields.io/david/poppinlp/eslint-config-handsome.svg?style=flat-square
[dep-url]:https://david-dm.org/poppinlp/eslint-config-handsome

[dev-dep-img]:https://img.shields.io/david/dev/poppinlp/eslint-config-handsome.svg?style=flat-square
[dev-dep-url]:https://david-dm.org/poppinlp/eslint-config-handsome#info=devDependencies

[peer-dep-img]:https://img.shields.io/david/peer/webcomponents/generator-element.svg?style=flat-square
[peer-dep-url]:https://david-dm.org/poppinlp/eslint-config-handsome#info=devDependencies

[npm-ver-img]:https://img.shields.io/npm/v/eslint-config-handsome.svg?style=flat-square
[npm-dl-img]:https://img.shields.io/npm/dm/eslint-config-handsome.svg?style=flat-square
[npm-lc-img]:https://img.shields.io/npm/l/eslint-config-handsome.svg?style=flat-square
[npm-url]:https://www.npmjs.com/package/eslint-config-handsome
