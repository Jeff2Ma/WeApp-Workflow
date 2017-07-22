//index.js
//获取应用实例
var app = getApp()
Page({
	data: {
		motto: 'Hello World',
		userInfo: {}
	},
	onLoad: function () {

	},
	copyText: function (e) {
		var txt = e.currentTarget.dataset.text;
		wx.setClipboardData({
			data: txt,
			success: function (res) {
				wx.getClipboardData({
					success: function (res) {
						wx.showToast({
							title: '复制成功！',
							icon: 'success',
							duration: 1000
						})
					}
				})
			}
		})
	},
});
