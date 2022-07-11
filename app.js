// app.js
const AV = require('./libs/av-core-min.js');
const adapters = require('./libs/leancloud-adapters-weapp.js');
AV.setAdapters(adapters);
AV.init({
    appId: "qahwQaImC2skIeATKmehrxKU-gzGzoHsz",
    appKey: "wEXezKGHTFTPPCkY5w3LXoMt",
    serverURL: "https://qahwqaim.lc-cn-n1-shared.com"
  });
App({
    onLaunch: function(options) {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
          success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
          }
        })
        // 获取用户信息
        wx.getSetting({
          success: res => {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                success: res => {
                  // 可以将 res 发送给后台解码出 unionId
                  this.globalData.userInfo = res.userInfo

                  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                  // 所以此处加入 callback 以防止这种情况
                  if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(res)
                  }
                }
              })
            }
          }
        })        
        const that = this;
        // 获取系统信息
        const systemInfo = wx.getSystemInfoSync();
        // 胶囊按钮位置信息
        const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
        // 导航栏高度 = 状态栏高度 + 44
        that.globalData.navBarHeight = systemInfo.statusBarHeight + 44;
        that.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
        that.globalData.menuTop=  menuButtonInfo.top;
        that.globalData.menuHeight = menuButtonInfo.height;
        that.globalData.windowWidth = systemInfo.windowWidth;
        that.globalData.statusBarHeight = systemInfo.statusBarHeight;

    },
    // 数据都是根据当前机型进行计算，这样的方式兼容大部分机器
    globalData: {
        navBarHeight: 0, // 导航栏高度
        menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
        menuTop: 0, // 胶囊距底部间距（保持底部间距一致）
        menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
        userInfo:{},
    }

})
