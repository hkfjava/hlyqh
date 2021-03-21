Page({
  data: {
    movieList: [],
    num : 0
  },


   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database()  //获取数据库的引用
    const _ = db.command     //获取数据库查询及更新指令
    db.collection("video_fileid")  //获取集合china的引用
      .get()                   //获取根据查询条件筛选后的集合数据
      .then(res => {
        console.log('video_fileid 的数据',res.data)
        const movieList = res.data
        this.setData({
          movieList
        })
        console.log('photo_fileid 的数据',res.data)
        
      })
      .catch(err => {
        console.error(err)
      })
  },

  onPullDownRefresh: function () {
    var that = this;
    that.setData({
      currentTab: 0 //当前页的一些初始数据，视业务需求而定
    })
    this.onLoad(); //重新加载onLoad()
  },
  
 
})