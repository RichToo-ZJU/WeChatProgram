// index.js
// 获取应用实例
// const app = getApp()
import Toast from '@vant/weapp/toast/toast';
const app = getApp()
var that
// const AV = require('../../libs/av-core-min.js')
Page({
  data:{
  userInfo: {},
  show: false,    
  actions: [
    {
      name: '微信授权登录',
      openType: 'getUserInfo'
    },
    {
      name: '分享',
      openType: 'share',
    },
  ],
  username:"XXX",
  usernumber:"100-000-0001",
  index:3,
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
  globalData:{

  } 
},    
  login:function(){
    AV.User.loginWithMiniApp().then(user => {
      this.globalData.user = user;
      Toast.success('登录成功');
    }).catch(console.error);      
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
    }
  },  
  onLoad:function(){
    that = this
    that.setData({
        index:app.globalData.index,//赋值
        userInfo:app.globalData.userInfo
    })
    // that.isAuthorize().then(res => { //用户已经授权获取基本信息
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       that.setData({
    //         userInfo: app.globalData.userInfo,
    //       })
    //     }
    //   })
    // }).catch(res => { //用户没有授权获取基本信息
    // })
  },  
  onShow(){
    this.setData({
      index:app.globalData.index,//赋值
      userInfo:app.globalData.userInfo
    })
    console.log(app.globalData.userInfo)
    console.log(this.userInfo)
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
/* 是否授权获取基本信息，已经授权返回到then，没有授权返回到catch */
  // isAuthorize() {
  //   return new Promise((resolve, reject) => {
  //     // 获取用户授权状态
  //     wx.getSetting({
  //       success: res => {
  //         if (res.authSetting['scope.userInfo']) {
  //           console.log("全局--用户已经授权")
  //           resolve()
  //         } else {
  //           console.log("全局--用户还没有授权获取基本信息")
  //           reject()
  //         }
  //       }
  //     })
  //   })
  // },
// 获取用户信息：拒绝还是接受都会进入这里
allowGetUserInfo (e) {
  console.log(e.detail);
  if (e.detail.rawData) { // 权限选择了：允许
    this.setData({
      userInfo: e.detail.userInfo,
    })
    app.globalData.userInfo = e.detail.userInfo
    Toast.success('成功登录');
    console.log(app.globalData.userInfo)
  } 
  else { // 权限选择了：拒绝
    wx.showModal({
      showCancel: false,
      content: '部分功能需要登录才能使用',
    })
  }
},
// 退出登录
exitUser(e){
  // 全局和页面上的用户信息为空
  app.globalData.userInfo = null
  this.setData({
    userInfo: null
  })
  Toast.success('成功退出');
}

})
