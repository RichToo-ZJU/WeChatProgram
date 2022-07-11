// pages/inquire/inquire.js
const app = getApp()
Page({
  data: {
    arrayDr:[{
      "name":"医生A",
      "hospital":"浙大一院",
      "rate":"4.5(834)",
      "distance":"2",
      "image":"/images/Doctor1.jpg",
    },
    {     
    "name":"医生B",
      "hospital":"B市人民医院",
      "rate":"4.5(8340)",
      "distance":"20",
      "image":"/images/Doctor2.jpg",
    },
    {
      "name":"医生C",
      "hospital":"C市人民医院",
      "rate":"4.5(83400)",
      "distance":"200",
      "image":"/images/Doctor3.jpg",
    },
    {
      "name":"医生D",
      "hospital":"D市人民医院",
      "rate":"4.5(834000)",
      "distance":"2000",
      "image":"/images/Doctor4.jpg",
    }
  ],
  navTitle: "more",
  index:1,
  tabBar:[
      {
        name:'home',
        icon:'icon-heart-rate',
      },
      {
        name:'product',
        icon:'icon-faxian',
      },
      {
        name:'inquiry',
        icon:'icon-liaotian',
      },
      {
        name:'user',
        icon:'icon-yonghu-yuan',
      }],
    
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
      }
      if(e.currentTarget.dataset.index == 1)
      {
          app.globalData.index=e.currentTarget.dataset.index
          wx.redirectTo({
              url: '../discover/discover'
          })
      }
      if(e.currentTarget.dataset.index == 3)
      {
          app.globalData.index=e.currentTarget.dataset.index
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
    let that = this;
    that.setData({
        index:app.globalData.index//赋值
    });
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
