// miniprogram/pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '/images/avatar.png',
    nickName:"用户未登陆",
    city:"未知",
    imgurl: "",
  },

    // 小程序上传视频
    chooseVideo: function () {
      const db = wx.cloud.database()  //获取数据库的引用
      const _ = db.command     //获取数据库查询及更新指令
      wx.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: res=> {
          const filePath = res.tempFilePaths[0]
          const cloudPath = `video/${Date.now()}-${Math.floor(Math.random(0, 1) * 1000)}` + filePath.match(/\.[^.]+?$/)[0]
          wx.cloud.uploadFile({
            cloudPath,
            filePath,
            success: res => {
              console.log('上传成功  video_fileid后获得的res：', res)
              // const imgurl=res.fileID
              // this.setData({
              //   imgurl
              // })
  
              db.collection('video_fileid').add({
                data: {
                  fileid:res.fileID
                }
              })
                .then(res => {
                  console.log("video_fileid数据库保存成功")
                  console.log(res)
                })
                .catch(console.error)
            },
          })
        }
      })
    },
  

  // 小程序上传图片
  chooseImg: function () {
    const db = wx.cloud.database()  //获取数据库的引用
    const _ = db.command     //获取数据库查询及更新指令
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: res=> {
        const filePath = res.tempFilePaths[0]
        const cloudPath = `phone/${Date.now()}-${Math.floor(Math.random(0, 1) * 1000)}` + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('上传成功photo_fileid后获得的res：', res)
            const imgurl=res.fileID
            this.setData({
              imgurl
            })

            db.collection('photo_fileid').add({
              data: {
                photo_time:new Date(),
                fileid:res.fileID
              }
            })
              .then(res => {
                console.log("photo_fileid数据库保存成功")
                console.log(res)
              })
              .catch(console.error)
          },
        })
      }
    })
  },


  // 云函数上传图片
  uploadimg: function (){
    console.log("点击了云函数上传图片")
    wx.cloud.callFunction({
      name: 'uploadimg',
      success: res => {
        console.log(res)
      }
    })
  },

// 获取用户信息
  getUserInfomation: function (event) {
    console.log('getUserInfomation打印的事件对象', event)
    let { avatarUrl, city, nickName}= event.detail.userInfo
    avatarUrl = avatarUrl.split("/")
    avatarUrl[avatarUrl.length - 1] = 0;
    avatarUrl = avatarUrl.join('/');
    this.setData({
      avatarUrl,city, nickName
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              let { avatarUrl, city, nickName } =res.userInfo
              this.setData({
                avatarUrl, city, nickName
              })
            }
          })
        }
      }
    });
    const db = wx.cloud.database()
  db.collection('zhihu_daily')
    .get()
    .then(res => {
      console.log('数据库结果数据',res.data)
      console.log('数据库结果数据',res)
    })
    .catch(err => {
      console.error('数据库错误',err)
    })
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