// index.js
Page({
  data: {
    min: 16666,
    max: 30000,
    randomNumber: ''
  },
  setMin: function(e) {
    // 保持固定最小值
    // this.setData({min: parseInt(e.detail.value)});
  },
  setMax: function(e) {
    // 保持固定最大值
    // this.setData({max: parseInt(e.detail.value)});
  },
  generateRandom: function() {
    const {min, max} = this.data;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setData({randomNumber: randomNum});
  }
})
