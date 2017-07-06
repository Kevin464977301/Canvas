// pages/index/index1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
    taiJi: function (context, x, y) {
    // context.beginPath();
    // context.setStrokeStyle("#000000");
    // context.arc( x, y,50,0,2*Math.PI);
    // context.stroke();
    //大黑半圆
    context.beginPath();
    context.setFillStyle("#000000");
    context.arc(x, y, 50, 0.5 * Math.PI, 1.5 * Math.PI);
    context.fill();

    //大白半圆
    context.beginPath();
    context.arc(x, y, 50, 1.5 * Math.PI, 2.5 * Math.PI);
    context.setFillStyle('#ffffff');
    context.fill();

    //小黑半圆
    context.beginPath();
    context.arc(x, y - 25, 25, 1.5 * Math.PI, 2.5 * Math.PI);
    context.setFillStyle('#000000');
    context.fill();

    //小白半圆
    context.beginPath();
    context.arc(x, y + 25, 25, 0.5 * Math.PI, 1.5 * Math.PI);
    context.setFillStyle('#ffffff');
    context.fill();

    //小黑圆
    context.beginPath();
    context.arc(x, y + 25, 5, 0, 2 * Math.PI);
    context.setFillStyle('#000000');
    context.fill();

    //小白圆
    context.beginPath();
    context.arc(x, y - 25, 5, 0, 2 * Math.PI);
    context.setFillStyle('#ffffff');
    context.fill();
  },
  onReady: function () {
    var context = wx.createCanvasContext("secondCanvas");
    this.taiJi(context, 50, 50);
    this.taiJi(context, 50, 150);
    this.taiJi(context, 50, 250);
    this.taiJi(context, 50, 350);
    this.taiJi(context, 50, 450);
    
    // this.taiJi(context, 150, 50);
    // this.taiJi(context, 250, 50);
    // this.taiJi(context, 350, 50);
    context.draw();
  }
})