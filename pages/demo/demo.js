// pages/demo/demo.js
Page({

  data: {
    content: '默认数据'
  },

  onLoad: function (options) {

  },

  onReady: function () {
    wx.request({
      url: 'uuchan.xyz/course',
      success: function(res) {
        console.log('request successfully')
        console.log(res.data.data)
        this.setData({
          content: res.data.data
        })
      },
      fail: function(res) {
        console.log("request failed")
      }
    })
  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})