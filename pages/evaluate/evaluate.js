// pages/home/home.js
var util = require('../../utils/util.js')
import Toast from '@vant/weapp/toast/toast';
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 1,
    navTitle: "评价",
    value: 0,
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    feed: [],
    feed_length: 0,
    isback: true,
    message: ""
  },

  onChange(event) {
    this.setData({
      value: event.detail,
    });
  },
  output_button(e) {
    if (this.data.value != 0) {
      this.setData({
        value: 0,
        message: " "
      });
      Toast.success("评价成功");
    }
    else{
      Toast.fail("请输入星级");
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this;
    that.setData({
      index: app.globalData.index//赋值
    })
    that.setData({
      navBarHeight: app.globalData.navBarHeight//赋值
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