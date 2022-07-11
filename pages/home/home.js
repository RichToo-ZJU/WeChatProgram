// pages/home/home.js
var util = require('../../utils/util.js');
var app = getApp()
var that
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    userInfo: {},
    user_name:"世界",
    user_picture:"https://img.yzcdn.cn/vant/cat.jpeg",
    weekday: '',
    week: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    month_day:'',
    month: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'Jun',
            'Jul',
            'Aug', 
            'Sep', 
            'Oct',
            'Nov',
            'Dec'],
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
            wx.redirectTo({
                url: '../mine/mine'
            })

        }
    },  
    emergency_go(e){
      wx.navigateTo({
        url: '../emergency/emergency'
    })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(){
    let that = this
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    time=time.split(" ")[0].split("/")//变数组
    this.setData({
      time: time
    });
    // console.log(time)
    console.log(that.data.userInfo)
    if (app.globalData.userInfo.nickName!="微信用户")
    { 
      that.setData({
          index:app.globalData.index,//赋值
          userInfo:app.globalData.userInfo,
          user_name:app.globalData.userInfo.nickName,
          user_picture:app.globalData.userInfo.avatarUrl
      })
      console.log(that.data.userInfo)
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow(){
      var today=new Date().getDay();
      var month_time=new Date().getMonth();
      // console.log("today:"+today);
      // console.log("month_time:"+month_time);
     switch (today){
         case 0:
         this.setData({
           weekday: this.week[0]
         }) 
         break; 
         case 1:
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
        this.setData({
          weekday: this.data.week[today]
        })
         break;
       }
       switch (month_time){
        case 0:
        this.setData({
          month_day: this.month[0]
        }) 
        break; 
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:    
        case 9:    
        case 10:
        case 11:   
    
       this.setData({
         month_day: this.data.month[month_time-1],
        })
        break;
      }

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