Page({
  data: {
   
  },

  // 验证姓名
  nameChange: function(e) {
    this.checkName(e.detail.value)
  },
 
  // checkName()方法
  checkName: function(data) {
    var reg = /^[\u4E00-\u9FA5A-Za-z]+$/;
    return this.check(data, reg, '输入错误！')
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
  formSubmit: function(e) {
    const db = wx.cloud.database()  //获取数据库的引用
    const _ = db.command     //获取数据库查询及更新指令
    var man_name = e.detail.value.man_name
    var woman_name = e.detail.value.woman_name
    var date = e.detail.value.marry_time
    var address = e.detail.value.marry_address
    
    if (this.checkName(man_name) && this.checkName(woman_name) && this.checkName(date) && this.checkName(address)) {
      // console.log("name",name)  
      // console.log("phone",phone)  
      // console.log("wish",wish)  
      // console.log("num",num)  


      db.collection('marry_info').add({
        data: {
          man_name: man_name,
          woman_name: woman_name,
          marry_time: date,
          marry_address: address
        }
      })
        .then(res => {
          console.log(res)
        })
        .catch(console.error)
    

      

    }
  }
})
