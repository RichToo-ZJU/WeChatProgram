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
    content:[
      {
        name:"有氧类项目",
        article_leancloud:[
          {
            title_name:"跑步后拉伸",
            link:"http://lc-qahwQaIm.cn-n1.lcfile.com/OI5Tmy8oQ1JtmWe3yFfqKRFxil9P4edh/%E6%9C%89%E6%B0%A7%E7%B1%BB%E9%A1%B9%E7%9B%AE_%E8%B7%91%E6%AD%A5%E5%90%8E%E6%8B%89%E4%BC%B8.md"},
          {
            title_name:"跑步前热身",
            link:"http://lc-qahwQaIm.cn-n1.lcfile.com/WpgSEfAqnKaQUxBDigR35F82X0NMdMCC/%E6%9C%89%E6%B0%A7%E7%B1%BB%E9%A1%B9%E7%9B%AE_%E8%B7%91%E6%AD%A5%E5%89%8D%E7%83%AD%E8%BA%AB.md"},
          {
            title_name:"跳绳后拉伸",
            link:"http://lc-qahwQaIm.cn-n1.lcfile.com/KvP6SrkRoMFYcMX4O0IlXLuwliL6JEnw/%E6%9C%89%E6%B0%A7%E7%B1%BB%E9%A1%B9%E7%9B%AE_%E8%B7%B3%E7%BB%B3%E5%90%8E%E6%8B%89%E4%BC%B8.md"},
          {
            title_name:"游泳前热身",
            link:"http://lc-qahwQaIm.cn-n1.lcfile.com/Wx3PMf1YFhprPodXLYauebPhuNcXxKGq/%E6%9C%89%E6%B0%A7%E7%B1%BB%E9%A1%B9%E7%9B%AE_%E6%B8%B8%E6%B3%B3%E5%89%8D%E7%83%AD%E8%BA%AB.md"},
        ]
      },
      {
        name:"球类项目",
        article_leancloud:[
          {
            title_name:"缓解肌肉酸痛的方法",
            link:"http://lc-qahwQaIm.cn-n1.lcfile.com/bkh3QgxIq6Nw4x6BUfa92IucVPwDYrCw/%E7%90%83%E7%B1%BB%E9%A1%B9%E7%9B%AE_%E7%BC%93%E8%A7%A3%E8%82%8C%E8%82%89%E9%85%B8%E7%97%9B%E7%9A%84%E6%96%B9%E6%B3%95.md"},
          {
            title_name:"篮球后拉伸",
            link:"http://lc-qahwQaIm.cn-n1.lcfile.com/XxeMOT8hUE5DGMSecIkxBWB6BSB2sFeq/%E7%90%83%E7%B1%BB%E9%A1%B9%E7%9B%AE_%E7%AF%AE%E7%90%83%E5%90%8E%E6%8B%89%E4%BC%B8.md"},
        ]
      },
      {
        name:"特殊人群",
        article_leancloud:[
          {
            title_name:"儿童锻炼常识",
            link:"http://lc-qahwQaIm.cn-n1.lcfile.com/L6xCdLkO1Rw19Eg1AMn28Ix8rqao5xkm/%E7%89%B9%E6%AE%8A%E4%BA%BA%E7%BE%A4_%E5%84%BF%E7%AB%A5%E9%94%BB%E7%82%BC%E5%B8%B8%E8%AF%86.md"},
          {
            title_name:"老年人锻炼常识",
            link:"http://lc-qahwQaIm.cn-n1.lcfile.com/4FOUycQ7OhQaPUKJ2e7SESStAEm9A2GI/%E7%89%B9%E6%AE%8A%E4%BA%BA%E7%BE%A4_%E8%80%81%E5%B9%B4%E4%BA%BA%E9%94%BB%E7%82%BC%E5%B8%B8%E8%AF%86.md"}
        ]
      },
      {
        name:"特殊场景",
        article_leancloud:[
          {
            title_name:"冬季运动常识",
            link:"http://lc-qahwQaIm.cn-n1.lcfile.com/SBoWUD2VnVO0bgMsxYJMP3v2rkCVk4dd/%E7%89%B9%E6%AE%8A%E5%9C%BA%E6%99%AF_%E5%86%AC%E5%AD%A3%E8%BF%90%E5%8A%A8%E5%B8%B8%E8%AF%86.md"},
          {
            title_name:"夏季运动常识",
            link:"http://lc-qahwQaIm.cn-n1.lcfile.com/XIXAg0dwrcvLyLcN2jzdFhLyTngyIyk3/%E7%89%B9%E6%AE%8A%E5%9C%BA%E6%99%AF_%E5%A4%8F%E5%AD%A3%E8%BF%90%E5%8A%A8%E5%B8%B8%E8%AF%86.md"},
        ]
      },
    ]
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
    var article_class_chocie = app.globalData.article_class_chocie
    const k = content[article_class_chocie].article_leancloud[options.choice].link;
    that.setData({
      navBarHeight: app.globalData.navBarHeight,//赋值
      title_name:content[article_class_chocie].article_leancloud[options.choice].title_name
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