// // components/navbar/index.js
// var app = getApp()
 
// Component({
//   options: {
//     addGlobalClass: true,
//   },
//   /**
//    * 组件的属性列表
//    */
//   properties: {
//     pageName: String,
//     bgColor: String,
//     iconColor: String,
//     fontColor: String,
//     showNav: Boolean,
//     showHome: {
//       type: Boolean,
//       value: true
//     }
//   },
 
//   /**
//    * 组件的初始数据
//    */
//   data: {
//     showPop: false
//   },
//   lifetimes: {
//     attached: function () {
//       this.setData({
//         navHeight: app.globalData.navHeight,
//         navTop: app.globalData.navTop,
//         windowHeight: app.globalData.windowHeight
//       })
//      }
//   },
//   /**
//    * 组件的方法列表
//    */
//   methods: {
//     //回退
//     navBack: function () {
//       console.log('返回按钮')
//       wx.navigateBack({
//         delta: 1
//       })      
//     },
//     //回主页
//     toIndex: function () {
//       console.log('打开tab页面')
//       this.setData({
//         showPop: true
//       })
//     },
//     onClickHide: function() {
//       this.setData({
//         showPop: false
//       })
//     },
//     goto: function(e) {
//       var page = e.currentTarget.dataset.page
//       if ('index' === page) {
//         wx.reLaunch({
//           url: '/pages/index/index'
//         })
//         this.onClickHide()
//       } else if ('cart' === page) {
//         wx.reLaunch({
//           url: '/pages/cart/cart'
//         })
//         this.onClickHide()
//       } else if ('my' === page) {
//         wx.reLaunch({
//           url: '/pages/my/my'
//         })
//         this.onClickHide()
//       } else if ('class' === page) {
//         wx.reLaunch({
//           url: '/pages/class/class'
//         })
//         this.onClickHide()
//       } else if ('footprint' === page) {
//         wx.navigateTo({
//           url: '/pages/my/footprint/footprint'
//         })
//         this.onClickHide()
//       }
//     }
//   }
// })
const app = getApp()
Component({
    properties: {
        // defaultData（父页面传递的数据-就是引用组件的页面）
        defaultData: {
            type: Object,
            value: {
                title: "我是默认标题"
            },
            observer: function(newVal, oldVal) {}
        },
        navTitle:{
            type:String,
            value:''
        }
    },
    data: {
        navBarHeight: app.globalData.navBarHeight,
        menuRight: app.globalData.menuRight,
        menuTop: app.globalData.menuTop,
        menuHeight: app.globalData.menuHeight,
    },
    attached: function() {},
    methods: {}
})
