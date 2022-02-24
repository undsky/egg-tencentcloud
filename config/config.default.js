/*
 * @Author: 姜彦汐
 * @Date: 2021-01-04 08:57:54
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2022-02-24 11:08:55
 * @Description: 
 * @Site: https://www.undsky.com
 * @FilePath: /mc-egg-admin/lib/plugin/tencentcloud/config/config.default.js
 */
module.exports = appInfo => ({
    tencentcloud: {
        default: {
            appid: null,
            secretId: null,
            secretKey: null,
            region: null
        },
        // Single
        // client: {
        //     sts: { // 安全凭证服务
        //         region: null
        //     },
        //     sms: { // 短信
        //         TemplateID: null,
        //         Sign: null,
        //         SmsSdkAppid: null
        //     },
        //     vod: { // 点播
        //         key: null, // key 防盗链 https://cloud.tencent.com/document/product/266/14047
        //     }
        // },
        // Multi
        // clients: {
        //     tencentcloud1: {

        //     },
        //     tencentcloud2: {

        //     }
        // }
    }
})