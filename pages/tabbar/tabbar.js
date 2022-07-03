// index.js
// 获取应用实例
var app = getApp()
Page({
  data: {
    index:app.globalData.index,
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
        name:'user',
        icon:'icon-liaotian',
      },
      {
        name:'user',
        icon:'icon-yonghu-yuan',
      }
    ]
  },

//   goto:function(e){
//     if(e.currentTarget.dataset.index != this.index){
//         app.globalData.index=e.currentTarget.dataset.index
//         this.index=e.currentTarget.dataset.index
//         console.log(app.globalData.index)
//         console.log(this.index)
//     }
    // if(app.globalData.index == 0)
    // wx.navigateTo({
    //     url: '../home/index'
    // })
    // if(app.globalData.index == 1)
    //     wx.navigateTo({
    //         url: '../tabbar2/index'
    //     })
    // if(app.globalData.index == 2)
    //     wx.navigateTo({
    //         url: '../tabbar3/index'
    // })

//   },  
    goto(e){
        if(e.currentTarget.dataset.index!=this.data.index){
          this.setData({
            index:e.currentTarget.dataset.index
          })
        }
    
      },  
    onLoad() {

    },

})
