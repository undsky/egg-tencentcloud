require('bytenode'); 
module.exports = require('./live.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')