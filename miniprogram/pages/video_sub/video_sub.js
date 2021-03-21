Page({
  data: {
    videourl : ''
  },
 
  // 验证姓名
  nameChange: function(e) {
    this.checkName(e.detail.value)
  },
 
  // checkName()方法
  checkName: function(data) {
    var reg = /^[\u4E00-\u9FA5A-Za-z]+$/;
    return this.check(data, reg, '姓名输入错误！')
  },
 
  // check()方法
  check: function(data, reg, errMsg) {
    if (!reg.test(data)) {
      wx.showToast({
        title: errMsg,
        icon: 'none',
        duration: 1500
      })
    }
    return true
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
            const videourl=res.fileID
            this.setData({
              videourl
            })

          },
        })
      }
    })
  },


  formSubmit: function(e) {
    const db = wx.cloud.database()  //获取数据库的引用
    const _ = db.command     //获取数据库查询及更新指令
    var name = e.detail.value.name
    var newdate = new Date();
    var datestr = newdate.toLocaleDateString();
    var timestr = newdate.toLocaleTimeString();
    var time = datestr+" "+ timestr
    var vide = e.detail.value.vide
  
    
    if (this.checkName(name) ) {
      // console.log("name",name)  
      // console.log("time",time)  
      // console.log("vide",vide)  


      db.collection('video_fileid').add({
        data: {
          title: name,
          time: time,
          fileid: vide,
      
        }
      })
        .then(res => {
          console.log(res)
        })
        .catch(console.error)
    

    }
  }




})
