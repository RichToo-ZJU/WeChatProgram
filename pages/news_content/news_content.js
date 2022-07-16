// pages/emergency_deal/emergency_deal.js
const app = getApp()
import Toast from '@vant/weapp/toast/toast'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    article: {},
    // navTitle: "球类项目",
    title_name:"",
    navBarHeight: 0,
    statusBarHeight: app.globalData.statusBarHeight,
  },

  goto_inquiry() {
    wx.navigateTo({
      url: '../inquiry/inquiry',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    let that = this;
    const _ts = this;
    var content = that.data.content;
    const k = "http://lc-qahwQaIm.cn-n1.lcfile.com/Vok7hzoxGOXTPIyobc4jSvOKemxH36RY/%E6%B5%99%E6%B1%9F%E9%AB%98%E6%B8%A9%EF%BC%81%E6%B3%A8%E6%84%8F%E9%98%B2%E6%9A%91%EF%BC%81.md"
    that.setData({
      navBarHeight: app.globalData.navBarHeight,//赋值
      title_name:"浙江高温！注意防暑！"
    });
    app.getText(k, res => {
      let obj = app.towxml(res.data, 'markdown', {
        // theme:'dark',
        events: {
          tap: e => {
            console.log('tap', e);
          },
          change: e => {
            console.log('todo', e);
          }
        }
      });

      _ts.setData({
        article: obj,
        isLoading: false
      });
    });
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