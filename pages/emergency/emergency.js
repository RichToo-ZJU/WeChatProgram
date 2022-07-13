// pages/emergency/emergency.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: 0,
    imgUrls: [
      '../../images/dentist.jpg',
      '../../images/dentist_card.png',
      '../../images/1444983318907-_DSC1826.jpg'
    ],
    images_text: [
      {
        id: 0,
        image: [
          {
            child_id: 0,
            image: 'http://lc-qahwQaIm.cn-n1.lcfile.com/n4TeW5SxARb7R1hdCCN7yzlvPO98ueWc/jjcl_1.png',
            text1: '踝关节',
            text2: 'Ankle joint'
          },
          {
            child_id: 1,
            image: 'http://lc-qahwQaIm.cn-n1.lcfile.com/QeleJ8Uxt2m88CTv0KqmAzVhM4SYvBB0/jjcl_2.png',
            text1: '膝关节',
            text2: 'Knee joint'
          }
        ]
      },
      {
        id: 1,
        image: [
          {
            child_id: 0,
            image: 'http://lc-qahwQaIm.cn-n1.lcfile.com/iawo2eAnOKBcDmrQNpORkELl8g3dbIeG/jjcl_3.png',
            text1: '腕关节',
            text2: 'Wrist joints'
          },
          {
            child_id: 1,

            image: 'http://lc-qahwQaIm.cn-n1.lcfile.com/0joBFqCBFQeLrev8Almyhk9YP7H51nr0/jjcl_4.png',
            text1: '肘关节',
            text2: 'Elbow joint'
          }
        ]
      },
      {
        id: 2,
        image: [
          {
            child_id: 0,
            image: 'http://lc-qahwQaIm.cn-n1.lcfile.com/V4ktuzrueoE28SSiHhRctvBI0TTDxOY9/jjcl_5.png',
            text1: '髋关节',
            text2: 'Hip joint'
          }
        ]
      },
    ],
    navTitle: "紧急处理",
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    feed: [],
    feed_length: 0,
    isShow: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
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