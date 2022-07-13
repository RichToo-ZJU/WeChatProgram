// pages/chat/chat.js
// 获取小程序实例
var util = require('../../utils/util.js');
let app = getApp();
var that
Page({
    /**
     * 页面的初始数据
     */
    data: {
        /*用户*/
        user_name: '用户一号',
        user_image: '/images/user1.png',
        user_content: '',
        EMJadress: '',
        emj_hiden: true,
        userInfo: {},
        /*暂时默认存放医生消息*/
        chatlists: [
            {
                user_name: '医生A',
                user_image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01436d5f8ea34611013e45844c86a1.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660271961&t=2f583b13c47171fb26a79154eaf0c7f4',
                //ios存在无法显示webp格式图片的问题
                //user_image:'/image/Doctor1.webp
                content: '自动回复：你好！',
                emj_name: '',
                emj_adress: ''
            }
        ],
        opposite_name: '医生A',  /*用于顶部导航栏*/
        /*表情包路径数组*/
        arrayEmoji: [{
            name: "表情包1",
            adress: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.cnfq.com%2Fforum%2F202112%2F27%2F172904zyk0023z9lpl0n23.jpg&refer=http%3A%2F%2Fimg.cnfq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660272360&t=60ff2df8ee921b055ccb9a4ce8e11085",
        },
        {
            name: "表情包2",
            adress: "http://img.duoziwang.com/2019/03/06041943609540.jpg",
        },
        {
            name: "表情包3",
            adress: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-blog.csdnimg.cn%2Fimg_convert%2F09cc6e57118ac51a05b75ed3b4dca7de.gif&refer=http%3A%2F%2Fimg-blog.csdnimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660272416&t=b6f78cc1594f36198265da622cbd76ed",
        },
        {
            name: "表情包4",
            adress: "https://img1.baidu.com/it/u=1047861217,4287280841&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=501",
        },
        {
            name: "表情包5",
            adress: "https://img2.baidu.com/it/u=1468657792,2260686835&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500",
        },
        {
            name: "表情包6",
            adress: "https://img2.baidu.com/it/u=722745731,3938525021&fm=253&fmt=auto&app=138&f=PNG?w=144&h=144",
        }
        ],
        arrayMore: [
            {
                name: "moreimage",
                adress: "/images/more_image.png",
            },
            {
                name: "morevideo",
                adress: "/images/more_video.png"
            },
            {
                name: "morefile",
                adress: "/images/more_file.png"
            }
        ],

    },
    setContent(e) {
        console.log(e.detail.value);
        this.setData({ user_content: e.detail.value });
    },
    selectEmoji: function (e) {
        // 选择并且发送表情
        this.setData({ ['emj_hiden']: false });
        let Imgadress = e.currentTarget.dataset.adress;
        this.setData({ EMJadress: Imgadress });
        let _this = this;
        let object1 = {
            user_name: _this.data.user_name,
            user_image: _this.data.user_image,
            content: _this.data.user_content,
            emj_adress: _this.data.EMJadress,
        };
        let arr1 = _this.data.chatlists;
        arr1.push(object1)
        _this.setData(
            {
                chatlists: arr1
            }
        )

        this.setData({ ['emoji.visible']: false });

        this.setData({ ['emj_hadbeensend']: true });

    },
    sendMsg: function () {
        let _this = this;
        let object = {
            user_name: _this.data.user_name,
            user_image: _this.data.user_image,
            content: _this.data.user_content
        };
        let arr = _this.data.chatlists;
        arr.push(object)
        _this.setData({
            chatlists: arr,
            user_content: '',
            ['emj_hiden']: true,
        });
        // 把聊天内容发送到服务器，处理完成后返回，再把返回的数据放到chatlist里面
    },

    showEmoji() {
        this.setData({
            ['emoji.visible']: true,
            ['more.visible']: false,
            otherTypesMessagePanelVisible: false,
            recordVisible: false
        });
        // 关闭手机键盘
        wx.hideKeyboard().then(console.log).catch(console.log);
    },
    bindInputbox: function () {
        this.setData({ ['emoji.visible']: false });
    },

    showMore() {
        this.setData({
            ['more.visible']: true,
            ['emoji.visible']: false,
            otherTypesMessagePanelVisible: false,
            recordVisible: false
        });
        // 关闭手机键盘
        wx.hideKeyboard().then(console.log).catch(console.log);
    },
    bindInputbox: function () {
        this.setData({ ['emoji.visible']: false });
        this.setData({ ['more.visible']: false });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this
        console.log(app.globalData.userInfo)
        if (app.globalData.userInfo.nickName != "微信用户") {
            that.setData({
                index: app.globalData.index,//赋值
                userInfo: app.globalData.userInfo,
                user_name: app.globalData.userInfo.nickName,
                user_picture: app.globalData.userInfo.avatarUrl
            })
            console.log(that.data.userInfo)
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})