require('bytenode'); 
module.exports = require('./sms.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')