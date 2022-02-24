/*
 * @Author: 姜彦汐
 * @Date: 2021-01-04 09:01:31
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-08-20 16:10:30
 * @Description: 
 * @Site: https://www.undsky.com
 */
module.exports = function (Client, config) {
    let _config = {
        credential: {
            secretId: config.secretId,
            secretKey: config.secretKey
        },
        profile: {
            httpProfile: {
                endpoint: config.endpoint,
            },
        }
    }

    if (config.region)
        _config.region = config.region

    return new Client(_config)
}