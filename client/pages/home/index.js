// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [
      '../../image/banner/banner1.jpg',
      '../../image/banner/banner2.jpg'
    ],
    containerDemo: [],
    animationStatus: false
  },
  loop () {
    let BannerBox = [
      '../../image/banner/banner3.png',
      '../../image/banner/banner4.jpg',
      '../../image/banner/banner5.jpg'
    ]
    let doloop = () => {
      setTimeout(() => {
        let piece = BannerBox.shift()
        BannerBox.push(piece)
        // BannerBox.unshift()
        this.setData({
          animationStatus: false,
          containerDemo: [
            {
              url1: BannerBox[0],
              url2: BannerBox[0],
            },
            {
              url1: BannerBox[1],
              url2: BannerBox[1],
            },
            {
              url1: BannerBox[2],
              url2: BannerBox[2],
            }
          ]
        })
        this.setData({
          containerDemo: [
            {
              url1: BannerBox[0],
              url2: BannerBox[1],
            },
            {
              url1: BannerBox[1],
              url2: BannerBox[2],
            },
            {
              url1: BannerBox[2],
              url2: BannerBox[0],
            }
          ]
        })
        setTimeout(() => {
          this.setData({
            animationStatus: true
          })
          doloop()
        }, 100)
      }, 2000)
    }
    doloop()
    this.setData({
      animationStatus: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.loop()
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