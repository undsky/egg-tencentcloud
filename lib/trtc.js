require('bytenode'); 
module.exports = require('./trtc.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')