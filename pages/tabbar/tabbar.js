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
