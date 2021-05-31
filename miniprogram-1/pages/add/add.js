// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coin:0,
    cour:'是',
    comment:'',
    Ifcour:['是','否']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getNumber: function(e){
    this.setData({coin:e.detail.value})
  },

  courChange:function(e){
    let i=e.detail.value;
    this.setData({cour:this.data.Ifcour[i]});
  },

  bindTextAreaBlur: function(e) {
    var that = this;
    that.setData({
      details: e.detail.value
    });
  },

  submitForm:function(e){
    var app = getApp()
    var i = wx.getStorageSync('IDX')
    app.globalData.Cmd[i].push(e.detail.value)
    wx.setStorageSync('Cour', e.detail.value)
    wx.navigateBack()
  },
})

