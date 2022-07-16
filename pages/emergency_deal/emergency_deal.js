// pages/emergency_deal/emergency_deal.js
const app = getApp()
import Toast from '@vant/weapp/toast/toast'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    article: {},
    navTitle: "紧急处理",
    class:" ",
    navBarHeight: 0,
    statusBarHeight: app.globalData.statusBarHeight,
    active: 0,
    show: false,
    content: [
      {
        name: "踝关节",
        article_leancloud: [
          {
            title_name: "症状识别",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/uAoHmBJAi3SUVsrF2teIyLfano9QpY9x/1.1%E8%B8%9D%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "常见损伤类型",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/T0ie7Y39xpTesqQsR3GPi9tOlobDpgTW/1.2%E8%B8%9D%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "病因",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/PHgLyLYHkl3U1OYkl5NS176hi7gITbsV/1.3%E8%B8%9D%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "就医建议",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/dkTd2mqGb1mvqFmlw0Vn00pNAAjIo9wA/1.4%E8%B8%9D%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "自我恢复建议",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/wd33jreWLkl5fppJIz4T4PMMJSyDcopq/1.5%E8%B8%9D%E5%85%B3%E8%8A%82.md"
          },
        ]
      },
      {
        name: "膝关节",
        article_leancloud: [
          {
            title_name: "症状识别",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/nnCucrYKdpv24XQEU6I0KrcscvqJuxsy/2.1%E8%86%9D%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "常见损伤类型",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/SnlwVbx8DpkTO4WQPbwD5UN099otbpPV/2.2%E8%86%9D%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "病因",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/QOfKQ2ECFbU3JThLQKfr1q9Vwt7DG8ML/2.3%E8%86%9D%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "就医建议",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/2hIAbDs0v5lij1roH3L62HjIVIzhJK7g/2.4%E8%86%9D%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "自我恢复建议",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/IsaFuDvxKkLX2gpOA27q43RjTTAfWlXx/2.5%E8%86%9D%E5%85%B3%E8%8A%82.md"
          },
        ]
      },
      {
        name: "腕关节",
        article_leancloud: [
          {
            title_name: "症状识别",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/pwoo910HUTdAoA2GrsjK0brt61JU6QrU/3.1%E8%85%95%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "常见损伤类型",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/0aOqXH7Kv2SqRCu7UFKkU72QoWp2g7II/3.2%E8%85%95%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "病因",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/OjqdYj86xceLT7fdOzBLkqzA4VfBmum7/3.3%E8%85%95%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "就医建议",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/RBjisOySylT1fBYfFWCI5Ocop8Bq1kUA/3.4%E8%85%95%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "自我恢复建议",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/mtJm2igrptuncpeIns8S6Q0m46oFnw2U/3.5%E8%85%95%E5%85%B3%E8%8A%82.md"
          },
        ]
      },
      {
        name: "肘关节",
        article_leancloud: [
          {
            title_name: "症状识别",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/Av1g7hPOiq9xxjozFMlg0mXuW7M6imvg/4.1%E8%82%98%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "常见损伤类型",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/tadn9Iya9yKwHkplxWgeUmztOCt0WL2H/4.2%E8%82%98%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "病因",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/bzHLhIB1Xbdol3vTpRjqoh9Vcd4or7lP/4.3%E8%82%98%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "就医建议",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/SgfUu0XQybRDMhgSpL01yu6RVSVlthI6/4.4%E8%82%98%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "自我恢复建议",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/GPkT0HIeWgVhu8yQBOYjqrBaiRRFji8w/4.5%E8%82%98%E5%85%B3%E8%8A%82.md"
          },
        ]
      },
      {
        name: "髋关节",
        article_leancloud: [
          {
            title_name: "症状识别",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/LRF3NUrbcRxaJB2IJaJgfdowSBxq19Hj/5.1%E9%AB%8B%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "常见损伤类型",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/pQ7F31WoA7FeuV4H0p5IGAufBXfIusSW/5.2%E9%AB%8B%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "病因",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/NAhCPYg0djnnW9HTjQlkwsIsgyWQzHFf/5.3%E9%AB%8B%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "就医建议",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/MXGL5imDpCIOmbdQLmJesKWyQU1HK9ve/5.4%E9%AB%8B%E5%85%B3%E8%8A%82.md"
          },
          {
            title_name: "自我恢复建议",
            link: "http://lc-qahwQaIm.cn-n1.lcfile.com/DsV4o6sdvnRBEQNHvTt14yehYLhHyhbO/5.5%E9%AB%8B%E5%85%B3%E8%8A%82.md"
          },
        ]
      },
      {

      },
    ],
    content_choice: []
  },

  goto_inquiry() {
    wx.navigateTo({
      url: '../inquiry/inquiry',
    })
  },
  goto_evaluate() {
    wx.navigateTo({
      url: '../evaluate/evaluate',
    })
  },
  onChange(e) {
    const _ts = this;
    const k = this.data.content_choice[e.detail.index].link
    app.getText(k, res => {
      let obj = app.towxml(res.data, 'markdown', {
        // theme:'dark',
        events: {
          tap: e => {
            console.log('tap', e);
          },
          change: e => {
            console.log('todo', e);
          }
        }
      });

      _ts.setData({
        article: obj,
        isLoading: false,
      });
    });
    console.log(e.detail.index)
    console.log(_ts.data.active)
    if (e.detail.index == 4) {
      _ts.setData({
        show: true
      });
    }
    else {
      _ts.setData({
        show: false
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this
    console.log(options)
    app.globalData.emergency_class_chocie = options.choice
    var content_choice = that.data.content[app.globalData.emergency_class_chocie]
    that.setData({
      navBarHeight: app.globalData.navBarHeight,
      content_choice: content_choice.article_leancloud,
      class:content_choice.name
    })
    const _ts = this;
    const k = this.data.content_choice[0].link
    console.log(k)
    app.getText(k, res => {
      let obj = app.towxml(res.data, 'markdown', {
        // theme:'dark',
        events: {
          tap: e => {
            console.log('tap', e);
          },
          change: e => {
            console.log('todo', e);
          }
        }
      });

      _ts.setData({
        article: obj,
        isLoading: false
      });
    });
  },
})