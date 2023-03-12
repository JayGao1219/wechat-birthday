Page({
    /**
   * 页面的初始数据
   */
  data: {
    classStyle: '',
    value:0,
    id:'default',
    src:"../../audio/beat.mp3",
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.audioCtx = wx.createAudioContext('myAudio');
  },
  click() {
    this.setData({
      classStyle: 'animal',
      id:'font',
      value:this.data.value+1,
    });
    this.audioCtx.play();
    setTimeout(() => {
      this.setData({
        classStyle: '',
        //id:'default'
      });
    }, 100);
    setTimeout(() => {
      this.setData({
        id:'default'
      });
    }, 500);
  },

});
