// pages/home/home.js
var util = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:1,
    tabBar:[
        {
          name:'home',
          icon:'icon-heart-rate',
        },
        {
          name:'discovery',
          icon:'icon-faxian',
        },
        {
          name:'inquiry',
          icon:'icon-liaotian',
        },
        {
          name:'user',
          icon:'icon-yonghu-yuan',
        }
    ],
      navTitle: "医护知识",
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
    goto(e){
        if(e.currentTarget.dataset.index!=this.data.index){
          this.setData({
            index:e.currentTarget.dataset.index
          })
        }
       if(e.currentTarget.dataset.index == 0)
       {
           app.globalData.index=e.currentTarget.dataset.index
            wx.redirectTo({
                url: '../home/home'
            })
; 
       }
       if(e.currentTarget.dataset.index == 1)
       {
           app.globalData.index=e.currentTarget.dataset.index
       }
        if(e.currentTarget.dataset.index == 2)
        {
            app.globalData.index=e.currentTarget.dataset.index
            wx.redirectTo({
                url: '../inquiry/inquiry'
            })
            
        }
        if(e.currentTarget.dataset.index == 3)
        {
            app.globalData.index=e.currentTarget.dataset.index
            wx.redirectTo({
                url: '../mine/mine'
            })

        }
      },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // var next_index = wx.getStorageSync("next_indexi");
    // this.setData({
    //     index:next_index
    //   })
    let that = this;
    that.setData({
        index:app.globalData.index//赋值
    })
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