require('bytenode'); 
module.exports = require('./core.'+process.platform+'.'+process.version+'.jsc')