Page({
  data: {
    picker: {
      arr: ['0', '1', '2', '3', '4', '5', '6'],
      index: 1
    }
  },
  pickerChange: function(e) {
    this.setData({
      'picker.index': e.detail.value
    })
  },
  // 验证姓名
  nameChange: function(e) {
    this.checkName(e.detail.value)
  },
  // 验证手机号
  phoneChange: function(e) {
    this.checkPhone(e.detail.value)
  },
  // checkName()方法
  checkName: function(data) {
    var reg = /^[\u4E00-\u9FA5A-Za-z]+$/;
    return this.check(data, reg, '姓名输入错误！')
  },
  // checkPhone()方法
  checkPhone: function(data) {
    var reg = /^(((13)|(15)|(17)|(18))\d{9})$/;
    return this.check(data, reg, '手机号码输入有误！')
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
    var name = e.detail.value.name
    var phone = e.detail.value.phone
    var wish = e.detail.value.wish
    var num = e.detail.value.num
    
    if (this.checkName(name) && this.checkPhone(phone)) {
      // console.log("name",name)  
      // console.log("phone",phone)  
      // console.log("wish",wish)  
      // console.log("num",num)  


      db.collection('guest').add({
        data: {
          g_name: name,
          g_phone: phone,
          p_count: num,
          p_word: wish
        }
      })
        .then(res => {
          console.log(res)
        })
        .catch(console.error)
    

      

    }
  }
})
