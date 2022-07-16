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
            image: 'http://lc-qahwQaIm.cn-n1.lcfile.com/1QtEzie3FXQrtcvu3RGqGWXNFSYMwUNi/%E6%9C%89%E6%B0%A7%E7%B1%BB%E9%A1%B9%E7%9B%AE.png',
            text1: '有氧类项目',
            text2: 'Aerobic items',
            color: "#E6F0F5"
          },
          {
            child_id: 1,
            image: 'http://lc-qahwQaIm.cn-n1.lcfile.com/5MMq4wyhDXQmqXcKh8pMHS9kPqfhm8vc/%E7%90%83%E7%B1%BB%E9%A1%B9%E7%9B%AE.png',
            text1: '球类项目',
            text2: 'Ball games',
            color:"#9DCEF3"
          }
        ]
      },
      {
        id: 1,
        image: [
          {
            child_id: 2,
            image: 'http://lc-qahwQaIm.cn-n1.lcfile.com/WUK59jgrDxTCXTFgcMvt8qAGLOhVQjYu/%E7%89%B9%E6%AE%8A%E4%BA%BA%E7%BE%A4.png',
            text1: '特殊人群',
            text2: 'Special groups',
            color: "#D5F0F4"
          },
          {
            child_id: 3,
            image: 'http://lc-qahwQaIm.cn-n1.lcfile.com/N5lOOYlEu66JsShEcGeFX2JgJSfh9ADX/%E7%89%B9%E6%AE%8A%E5%9C%BA%E6%99%AF.png',
            text1: '特殊场景',
            text2: 'Special scenes',
            color:"rgb(255, 224, 224)"
          }
        ]
      }
    ],
    navBarHeight: 0,
    imgUrls: [
      'http://lc-qahwQaIm.cn-n1.lcfile.com/s04epnS7PeJgtGcyQzrTXiJ1D7fIfhpf/scroll1.png',
      'http://lc-qahwQaIm.cn-n1.lcfile.com/oixyVIWtaBheXN9sn4p49IKadlEYFI1f/scroll2.png',
      'http://lc-qahwQaIm.cn-n1.lcfile.com/GwQm8MTFFmiesWqnoTCW6s65SXi8fvOU/scroll3.png'
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
  dispath(e){
    var choice = " "
    if (e.currentTarget.dataset.text.child_id == 0){ choice = "0" }
    if (e.currentTarget.dataset.text.child_id == 1){ choice = "1" }
    if (e.currentTarget.dataset.text.child_id == 2){ choice = "2" }
    if (e.currentTarget.dataset.text.child_id == 3){ choice = "3" }
    app.globalData.article_class_chocie = choice   
    console.log(app.globalData.article_class_chocie)      
    wx.navigateTo({
      url:'../science_article/science_article?choice=' + choice
    })
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