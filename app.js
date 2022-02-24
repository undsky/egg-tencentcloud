/*
 * @Author: 姜彦汐
 * @Date: 2021-01-04 08:59:35
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2022-02-24 11:10:23
 * @Description: 
 * @Site: https://www.undsky.com
 */
const vod = require('./lib/vod')
const sts = require('./lib/sts')
const sms = require('./lib/sms')

module.exports = app => {
    app.addSingleton('tencentcloud', init);
}

function init(config, app) {
    let tencentcloud = {}

    if (config.sts)
        tencentcloud.sts = sts(config)

    if (config.sms)
        tencentcloud.sms = sms(config)

    if (config.vod)
        tencentcloud.vod = vod(config)

    return tencentcloud
}