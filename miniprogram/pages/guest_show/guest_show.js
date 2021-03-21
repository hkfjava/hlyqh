Page({
  data: {
    picker: {
      arr: ['0', '1', '2', '3', '4', '5', '6'],
      index: 1
    },
    guest_show: []
  },
  pickerChange: function(e) {
    this.setData({
      'picker.index': e.detail.value
    })
  },


/**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database()  //获取数据库的引用
    const _ = db.command     //获取数据库查询及更新指令
    db.collection("guest")  //获取集合china的引用
      .get()                   //获取根据查询条件筛选后的集合数据
      .then(res => {
        console.log('guest的数据',res.data)
        const guest_show = res.data
        this.setData({
          guest_show
        })
        console.log('guest_show的数据',res.data)
        
      })
      .catch(err => {
        console.error(err)
      })
  },

 


})