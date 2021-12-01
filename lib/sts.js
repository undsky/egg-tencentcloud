require('bytenode'); 
module.exports = require('./sts.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')