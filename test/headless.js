global.window = global;
global.assert = require('chai').assert;
require('../src/scripts/register');
require('./register.spec.js');