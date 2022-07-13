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
    navTitle:"球类项目",
    navBarHeight: 0,
    statusBarHeight:app.globalData.statusBarHeight,
  },

  goto_inquiry(){
    wx.navigateTo({
      url: '../inquiry/inquiry',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this;
    that.setData({
      navBarHeight: app.globalData.navBarHeight//赋值
    });
		const _ts = this;
    const k="http://lc-qahwQaIm.cn-n1.lcfile.com/osHKBlNKaQR4L4UW90aU2vUvHLunuShV/%E7%AF%AE%E7%90%83%E5%90%8E%E6%8B%89%E4%BC%B8.md";
		app.getText(k,res => {
			let obj = app.towxml(res.data,'markdown',{
				// theme:'dark',
				events:{
					tap:e => {
						console.log('tap',e);
					},
					change:e => {
						console.log('todo',e);
					}
				}
			});

			_ts.setData({
				article:obj,
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