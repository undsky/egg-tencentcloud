require('bytenode'); 
module.exports = require('./cdn.'+process.platform+'.'+process.version+'.jsc')