// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
// "tabBar": {
//   "color": "#626567",
//   "selectedColor": "#2A8CE5",
//   "backgroundColor": "#FBFBFB",
//   "borderStyle": "white",
//   "list": [
//       {
//           "pagePath": "pages/index/index",
//           "text": "",
//           "iconPath": "images/index.png",
//           "selectedIconPath": "images/index_focus.png"
//       },
//       {
//           "pagePath": "pages/logs/logs",
//           "text": "",
//           "iconPath": "images/discovery.png",
//           "selectedIconPath": "images/discovery_focus.png"
//       }]
// },