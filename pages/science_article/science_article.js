// pages/inquire/inquire.js
const app = getApp()
Page({
  data: {
    navTitle_choice: ["有氧运动", "球类运动", "特殊人群", "特殊场景"],
    navTitle: "",
    index: 1,
    tabBar: [
      {
        name: 'home',
        icon: 'icon-heart-rate',
      },
      {
        name: 'product',
        icon: 'icon-faxian',
      },
      {
        name: 'inquiry',
        icon: 'icon-liaotian',
      },
      {
        name: 'user',
        icon: 'icon-yonghu-yuan',
      }],
    content:{},
    content_choice: [[
      {
        id:0,
        title: "跑步后拉伸",
        shortcut: "腰背平直，左臂肱三头肌持续有..."
      },
      {
        id:1,
        title: "跑步前热身",
        shortcut: "热身是你运动或训练前的铺垫环节..."
      },
      {
        id:2,
        title: "跳绳后拉伸",
        shortcut: "身体直立，挺胸收腹，左臂自然伸直..."
      },
      {
        id:3,
        title: "游泳前热身",
        shortcut: "头部向前后左右转动，拉伸颈部肌肉..."
      },
    ],
    [
      {
        id:0,
        title: "缓解肌肉酸痛的方法",
        shortcut: "七种预防肌肉酸痛的方法..."
      },
      {
        id:1,
        title: "篮球后拉伸",
        shortcut: "在胸前抱膝，稍收下巴，释放颈后的紧绷感..."
      },
    ],
    [
      {
        id:0,
        title: "儿童锻炼常识",
        shortcut: "体育运动要根据儿童少年的年龄和性别特点..."
      },
      {
        id:1,
        title: "老年人锻炼常识",
        shortcut: "通过锻炼增强身体素质是做好养老的基础保障..."
      },
    ],
    [
      {
        id:0,
        title: "冬季运动常识",
        shortcut: "冬季运动可选择动作幅度较小、热量..."
      },
      {
        id:1,
        title: "夏季运动常识",
        shortcut: "在运动前确保身体水分充足非常重要..."
      },
    ],
    ]
  },
  dispath(e){
    console.log(e)
    var choice = " "
    if (e.currentTarget.dataset.text.id == 0){ choice = "0" }
    if (e.currentTarget.dataset.text.id == 1){ choice = "1" }
    if (e.currentTarget.dataset.text.id == 2){ choice = "2" }
    if (e.currentTarget.dataset.text.id == 3){ choice = "3" }
    wx.navigateTo({
      url:'../science_article_content/science_article_content?choice=' + choice
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
      wx.redirectTo({
        url: '../discover/discover'
      })
    }
    if (e.currentTarget.dataset.index == 3) {
      app.globalData.index = e.currentTarget.dataset.index
      wx.redirectTo({
        url: '../mine/mine'
      })
      console.log(app.globalData.index)
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    let that = this;
    const content = that.data.content_choice[options.choice]
    const navTitle = that.data.navTitle_choice[options.choice]
    that.setData({
      index: app.globalData.index,//赋值
      content:content,
      navTitle:navTitle
    });
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
