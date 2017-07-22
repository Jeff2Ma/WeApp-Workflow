/**
 * ------------------------------------------------------------------
 * WeApp-Workflow 配置文件
 *
 * 建议复制一份并重命名为 config.custom.js ，即可在config.custom.js 上根据需求进行配置
 * ------------------------------------------------------------------
 *
 * @author  JeffMa
 * @link    https://devework.com/
 * @data    2017-06-11
 */

module.exports = {
	"enabledQcloud": false,
	"qcloud": {
		"appid": "1111111",
		"secretId": "xxx",
		"secretKey": "xxxxx",
		"bucket": "xxxx",
		"region": "sh",
		"prefix": "what-ever/you-want",
		"overWrite": true,
		"headers": {
			"Cache-Control": "max-age=5184000"
		}
	},
	"assetsCDN": "https://res.jianhui.org/"
};
