// pages/cour/cour.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cour: '',
    name: '',
    Cour: false,
    Cmd: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp()
    var i = wx.getStorageSync('IDX')
    this.setData({cour:app.globalData.Class[i].cour})
    this.setData({name:app.globalData.Class[i].name})
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
    var app = getApp()
    var i = wx.getStorageSync('IDX')
    console.log(app.globalData.Cmd)
    this.setData({Cmd:app.globalData.Cmd[i]})
    let Cour = wx.getStorageSync('Cour')
    this.setData({Cour:Cour})
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

  goToAdd:function(){
    wx.navigateTo({
      url:'../add/add',
    })
  },
})