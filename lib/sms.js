require('bytenode'); 
module.exports = require('./sms.'+process.platform+'.'+process.version+'.jsc')