const
    fs = require('fs'),
    path = require('path'),
    yml = require('js-yaml');

module.exports = yml.safeLoad(fs.readFileSync(path.join(__dirname, '.eslintrc.yaml'), 'utf8'));
