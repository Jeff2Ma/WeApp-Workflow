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
	"enabledQcloud": false, //是否开启腾讯云COS 上传功能
	// 腾讯云COS 上传功能配置表
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
	// 静态资源CDN 域名，配合CDN 功能实用，线上请确保在mp管理端已经注册域名
	"assetsCDN": "https://res.jianhui.org/"
};
