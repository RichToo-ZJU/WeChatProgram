// index.js
// 获取应用实例
const app = getApp()

Page({
  data:{
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
  ]
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
    onLoad(options) {
      let that = this;
      that.setData({
          index:app.globalData.index//赋值
      })
    },  
    
itemSelected:function(e){

},

onLoad:function(options){

},

onShow:function(){

},

onHide:function(){

},

onUnload:function(){

},

onPullDownRefresh:function(){

},

onReachBottom:function(){

},

onShareAppMessage:function(){

}

})
