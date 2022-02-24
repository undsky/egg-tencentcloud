/*
 * @Author: 姜彦汐
 * @Date: 2021-02-01 13:50:37
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-12-23 08:53:38
 * @Description: 
 * @Site: https://www.undsky.com
 */
const tencentcloud = require('tencentcloud-sdk-nodejs')
const core = require('./core')

module.exports = function (config) {
    const SMS = core(tencentcloud.sms.v20190711.Client, Object.assign({
        secretId: config.secretId,
        secretKey: config.secretKey,
        endpoint: "sms.tencentcloudapi.com"
    }, config.sms))

    async function send(PhoneNumberSet, TemplateParamSet, TemplateID, Sign, SmsSdkAppid) {
        const _phones = [].concat(PhoneNumberSet)
        let _PhoneNumberSet = []
        for (const _phone of _phones) {
            const phone = '' + _phone
            _PhoneNumberSet.push('1' == phone.substring(0, 1) ? ('86' + phone) : phone)
        }
        return await SMS.SendSms({
            "PhoneNumberSet": _PhoneNumberSet,
            "TemplateParamSet": [].concat(TemplateParamSet),
            "TemplateID": TemplateID || config.sms.TemplateID,
            "Sign": Sign || config.sms.Sign,
            "SmsSdkAppid": SmsSdkAppid || config.sms.SmsSdkAppid
        })
    }

    return {
        SMS,
        send
    }
}