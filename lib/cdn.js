require('bytenode'); 
module.exports = require('./cdn.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')