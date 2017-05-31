const fs = require('fs');
const yml = require('js-yaml');

module.exports = yml.safeLoad(fs.readFileSync('.eslintrc.yaml', 'utf8'));