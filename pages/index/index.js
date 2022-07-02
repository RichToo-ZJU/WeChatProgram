// index.js
// 获取应用实例
const app = getApp()
var helloData = {
  name: 'Weixin'
}
// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo'),
//     canIUseGetUserProfile: false,
//     canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') ,// 如需尝试获取用户信息可改为false
//     msg:"111"
//   },
//   // 事件处理函数
//   bindViewTap() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad() {
//     if (wx.getUserProfile) {
//       this.setData({
//         canIUseGetUserProfile: true
//       })
//     }
//   },
//   getUserProfile(e) {
//     // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
//     wx.getUserProfile({
//       desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
//       success: (res) => {
//         console.log(res)
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     })
//   },
//   getUserInfo(e) {
//     // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
//     console.log(e)
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   },
//   clickMe: function() {
//     if (this.data.msg == "111")
//       this.setData({ msg: "Hello World" })
//     else
//       this.setData({msg:"111"})
//   }
// })
Page({
  data:{
    name:"",
    msg:"123",
    array:[1,3],
    flag:0,
    length:10,
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'},
    array: [
    {
      message: 'foo',
    }, 
    {
      message: 'bar'
    }]
  },
  changeName: function(e) {   
    this.setData({
        name: 'MINA'
    })
  }
})