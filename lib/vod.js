/*
 * @Author: 姜彦汐
 * @Date: 2021-01-08 13:52:14
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-12-23 09:04:21
 * @Description: 
 * @Site: https://www.undsky.com
 */
const tencentcloud = require('tencentcloud-sdk-nodejs')
const crypto = require('crypto')
const path = require('path')



const core = require('./core')

module.exports = function (config) {
    const VOD = core(tencentcloud.vod.v20180717.Client, Object.assign({
        secretId: config.secretId,
        secretKey: config.secretKey,
        endpoint: "vod.tencentcloudapi.com"
    }, config.vod))

    /**
     * @description: key 防盗链 https://cloud.tencent.com/document/product/266/14047
     * @param {*} urlStr 视频链接
     * @param {*} duration 有效时间（秒），默认1小时
     * @return {*}
     */
    function sign(urlStr, duration) {
        const dir = path.dirname(new URL(urlStr).path) + '/';
        const rlimit = 3;
        const exper = '';
        const t = Math.floor((new Date().getTime() + 1000 * (duration || 3600)) / 1000).toString(16);
        const us = Math.random().toString(36).substring(2);
        const sign = crypto.createHash('md5').update(config.vod.key + dir + t + exper + rlimit + us).digest('hex');
        return `${urlStr}?t=${t}&exper=${exper}&rlimit=${rlimit}&us=${us}&sign=${sign}`;
    }

    return {
        VOD,
        sign
    }
}