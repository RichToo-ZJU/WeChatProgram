const app = getApp()
Component({
  properties: {
    // 是否显示左侧返回按钮
    isBack:{
      type:Boolean,
      value:true
    },
    // 返回层级 默认为1
    pageNum: {
      type: Number,
      value: 1
    },
    navTitle: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: ''
    }
  },
  methods: {
    //返回层级 默认为1
    back(e) {
      wx.navigateBack({
        delta:e.currentTarget.dataset.num
        // delta:1
      })
      console.log(e)
    },
  },
  data: {
    navBarHeight: app.globalData.navBarHeight,
    menuRight: app.globalData.menuRight,
    menuTop: app.globalData.menuTop,
    menuHeight: app.globalData.menuHeight,
  },
  attached: function () { },
})
