Page({
  data: {
    isPlayingMusic: false,
    marry:[]
  },
  bgm: null,
  music_url: 'https://m3.8js.net:99//20200920/woainibuwenguiqi-baixiaobai.mp3',
  music_coverImgUrl: 'http://localhost:3000/cover.jpg',
  onReady: function() {
    // 创建getBackgroundAudioManager实例对象
    this.bgm = wx.getBackgroundAudioManager()
    // 音频标题
    this.bgm.title = 'merry me'
    // 专辑名称
    this.bgm.epname = 'wedding'
    // 歌手名
    this.bgm.singer = 'singer'
    // 专辑封面
    this.bgm.coverImgUrl = this.music_coverImgUrl
    this.bgm.onCanplay(() => {
      this.bgm.pause()
    })
    // 指定音频的数据源
    this.bgm.src = this.music_url
  },
  // 播放器的单击事件
  play: function() {
    if (this.data.isPlayingMusic) {
      this.bgm.pause()
    } else {
      this.bgm.play()
    }
    this.setData({
      isPlayingMusic: !this.data.isPlayingMusic
    })
  },
  // 一键拨打电话
  // 新郎电话
  callGroom: function() {
    wx.makePhoneCall({
      phoneNumber: '13700000000'
    })
  },
  // 新娘电话
  callBride: function() {
    wx.makePhoneCall({
      phoneNumber: '15600000000'
    })
  },

/**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database()  //获取数据库的引用
    const _ = db.command     //获取数据库查询及更新指令
    db.collection("marry_info")  //获取集合china的引用
      .get()                   //获取根据查询条件筛选后的集合数据
      .then(res => {
        console.log('marry_info 的数据',res.data)
        const marry = res.data
        this.setData({
          marry
        })
        console.log('marry_info 的数据',res.data)
        
      })
      .catch(err => {
        console.error(err)
      })
  },

})