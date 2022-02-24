/*
 * @Author: 姜彦汐
 * @Date: 2021-01-21 09:11:57
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-12-23 08:58:42
 * @Description: 安全凭证服务 https://cloud.tencent.com/document/product/598/33164
 * @Site: https://www.undsky.com
 */
const tencentcloud = require('tencentcloud-sdk-nodejs')
const core = require('./core')

module.exports = function (config) {
    const _regions = config.sts.region
    if (!_regions) {
        return null
    }
    const _client = tencentcloud.sts.v20180813.Client
    const _config = {
        secretId: config.secretId,
        secretKey: config.secretKey,
        endpoint: "sts.tencentcloudapi.com"
    }

    let STS;

    if ('string' == typeof _regions) {
        // 单地域
        STS = core(_client, Object.assign(_config, config.sts))
    } else {
        // 多地域
        STS = {}
        for (const _region of _regions) {
            if ('string' == typeof _region) {
                // 不单独指定地域的域名
                STS[_region] = core(_client, Object.assign(_config, {
                    endpoint: config.sts.endpoint,
                    region: _region
                }))
            } else {
                // 金融区地域需要同时指定带金融区地域的域名，如果不是金融区地域使用默认域名
                if (!_region.endpoint) {
                    _region.endpoint = config.sts.endpoint
                }
                STS[_region.region] = core(_client, Object.assign(_config, _region))
            }
        }
    }

    /**
     * @description: https://cloud.tencent.com/document/product/598/10603
     * @param {*} data
     * @return {*}
     */
    function policy(data) {
        return encodeURIComponent(JSON.stringify(Object.assign({
            version: "2.0"
        }, data)))
    }

    return {
        STS,
        policy
    }
}