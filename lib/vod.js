require('bytenode'); 
module.exports = require('./vod.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')