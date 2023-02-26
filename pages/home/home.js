Page({
    /**
   * 页面的初始数据
   */
  data: {
    classStyle: '',
    value:0,
    id:'default',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  click() {
    this.setData({
      classStyle: 'animal',
      id:'font',
      value:this.data.value+1,
    });
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
