// miniprogram/pages/chinadata/chinadata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database()  //获取数据库的引用
    const _ = db.command     //获取数据库查询及更新指令
    db.collection("china")  //获取集合china的引用
      .where({              //查询的条件指令where
        gdp: _.gt(3000)     //查询筛选条件，gt表示字段需大于指定值。
      })
      .field({             //显示哪些字段
        _id:false,         //默认显示_id，这个隐藏
        city: true,
        province: true,
        gdp:true
      })
      .orderBy('gdp', 'desc')  //排序方式，降序排列
      .skip(0)                 //跳过多少个记录（常用于分页），0表示这里不跳过
      .limit(9)               //限制显示多少条记录，这里为10

      .get()                   //获取根据查询条件筛选后的集合数据
      .then(res => {
        console.log('china的数据',res.data)
      })
      .catch(err => {
        console.error(err)
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