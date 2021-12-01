require('bytenode'); 
module.exports = require('./core.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')