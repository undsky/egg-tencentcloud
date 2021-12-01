require('bytenode'); 
module.exports = require('./im.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')