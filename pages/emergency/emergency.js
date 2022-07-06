// pages/emergency/emergency.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight:0,
    imgUrls: [
      '../../images/24213.jpg',
      '../../images/24280.jpg',
      '../../images/1444983318907-_DSC1826.jpg'
    ],
    navTitle: "紧急处理",
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    feed: [],
    feed_length: 0  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) 
  {
        let that = this;
        that.setData({
            navBarHeight:app.globalData.navBarHeight//赋值
        })
        console.log(that.data.navBarHeight)
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})