require('bytenode'); 
module.exports = require('./cos.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')