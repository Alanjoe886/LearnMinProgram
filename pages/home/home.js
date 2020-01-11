// pages/home/home.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      mask: true,
      success: function () {
        console.log('展示弹框成功')
      },
      fail: function () {
        console.log('展示弹框失败')
      },
      complete: function () {
        console.log('完成函数的调用')
      }
    })
  },
  showModal() {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      // showCancel: false, //去除取消键
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  showLoading() {
    wx.showLoading({
      title: '加载中',
      mask: true
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },

  showActionSheet() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 发送网络请求
    // wx.request({
    //   url: 'http://jsonplaceholder.typicode.com/posts',
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     name: 'coderwhy',
    //     age: 18
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   },
    //   fail: function(err) {
    //     console.log(res)
    //   }
    // })
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
    return {
      title: '你好啊',
      path: '/pages/home/home',
      imageUrl: 'https://via.placeholder.com/600/92c952'
    }
  }
})