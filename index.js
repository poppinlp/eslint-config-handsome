const fs = require('fs');
const path = require('path');
const yml = require('js-yaml');

module.exports = yml.safeLoad(fs.readFileSync(path.join(__dirname, '.eslintrc.yaml'), 'utf8'));
