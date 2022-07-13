const app = getApp()
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    isWhite: { //默认不是白色自定义返回
      type: Boolean,
      value: false
    },
    // 背景颜色
    backgroundColor: {
      type: String,
      value: 'rgba(0,0,0,0)'
    },
    // 标题颜色
    titleColor: {
      type: String,
      value: 'rgba(0,0,0,1)'
    },
    // 边框颜色
    borderColor: {
      type: String,
      value: 'rgba(0,0,0,1)'
    },
    // 标题
    navTitle: {
      type: String,
      value: ''
    },
    // 状态栏区域位置 
    seat: {
      type: Boolean,
      value: true
    },
    // 是否显示左侧按钮
    isShow: {
      type: Boolean,
      value: true
    },
    // 是否显示左侧返回按钮
    isBack:{
      type:Boolean,
      value:true
    },
    // 返回层级 默认为1
    pageNum: {
      type: Number,
      value: 1
    }
  },
  data: {
    capsule: {}
  },
  lifetimes:{
      //判断是否有上一级页面，如果有显示返回按钮（isBack参数）否则不显示
    attached: function() {
        this.setData({
          isBack:getCurrentPages().length === 1?false:true
        })
    }
  },
  ready() {
      //获取机型状态栏信息
    const {
      statusBarHeight,
      navBarHeight
    } = app.globalData
    console.log(app.globalData)
    this.setData({
      statusBarHeight,
      navBarHeight,
      left: app.globalData.windowWidth - app.globalData.capsule.right, //胶囊据右边距离
      capsule: app.globalData.capsule
    })
  },
  methods: {
      //返回层级 默认为1
    back(e) {
      wx.navigateBack({
        delta: e.currentTarget.dataset.num
      })
    },
      //跳转到首页
    toIndex() {
      wx.switchTab({
        url: '/pages/index/index'
      })
    }
  }
})

