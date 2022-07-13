// pages/home/home.js
var util = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 1,
    tabBar: [
      {
        name: 'home',
        icon: 'icon-heart-rate',
      },
      {
        name: 'discovery',
        icon: 'icon-faxian',
      },
      {
        name: 'inquiry',
        icon: 'icon-liaotian',
      },
      {
        name: 'user',
        icon: 'icon-yonghu-yuan',
      }
    ],
    images_text: [
      {
        id: 0,
        image: [
          {
            child_id: 0,
            // image: 'http://lc-qahwQaIm.cn-n1.lcfile.com/n4TeW5SxARb7R1hdCCN7yzlvPO98ueWc/jjcl_1.png',
            text1: '有氧类项目',
            text2: 'Aerobic items'
          },
          {
            child_id: 1,
            // image: 'http://lc-qahwQaIm.cn-n1.lcfile.com/QeleJ8Uxt2m88CTv0KqmAzVhM4SYvBB0/jjcl_2.png',
            text1: '球类项目',
            text2: 'Ball games'
          }
        ]
      },
      {
        id: 1,
        image: [
          {
            child_id: 0,
            // image: 'http://lc-qahwQaIm.cn-n1.lcfile.com/iawo2eAnOKBcDmrQNpORkELl8g3dbIeG/jjcl_3.png',
            text1: '特殊人群',
            text2: 'Special groups'
          },
          {
            child_id: 1,

            // image: 'http://lc-qahwQaIm.cn-n1.lcfile.com/0joBFqCBFQeLrev8Almyhk9YP7H51nr0/jjcl_4.png',
            text1: '特殊场景',
            text2: 'Special scenes'
          }
        ]
      }
    ],
    navBarHeight: 0,
    imgUrls: [
      '../../images/dentist.jpg',
      '../../images/dentist_card.png',
      '../../images/1444983318907-_DSC1826.jpg'
    ],
    navTitle: "医护知识",
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    feed: [],
    feed_length: 0,
    isback: false
  },
  goto(e) {
    if (e.currentTarget.dataset.index != this.data.index) {
      this.setData({
        index: e.currentTarget.dataset.index
      })
    }
    if (e.currentTarget.dataset.index == 0) {
      app.globalData.index = e.currentTarget.dataset.index
      wx.redirectTo({
        url: '../home/home'
      })
        ;
    }
    if (e.currentTarget.dataset.index == 1) {
      app.globalData.index = e.currentTarget.dataset.index
    }
    if (e.currentTarget.dataset.index == 2) {
      app.globalData.index = e.currentTarget.dataset.index
      wx.redirectTo({
        url: '../inquiry/inquiry'
      })

    }
    if (e.currentTarget.dataset.index == 3) {
      app.globalData.index = e.currentTarget.dataset.index
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