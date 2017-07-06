//index.js
Page({
  // canvasIdErrorCallback: function (e) {
  //   console.error(e.detail.errMsg)
  // },
  onReady: function (e) {
    // 使用 wx.createContext 获取绘图的画布 context
    var context = wx.createCanvasContext('firstCanvas')
    //设置画线的颜色 绿色
    // context.setStrokeStyle("#00ff00")
    // //设置当前线条的宽度
    // context.setLineWidth(5)
    // //设置边框的位置 x,y,宽度,高度
    // //画矩形,正方形
    // context.rect(0, 0, 200, 200)
    // //空心的
    // context.stroke()
    // //设置边框的颜色 红色
    // context.setStrokeStyle("#ff0000")
    // //设置当前线条的宽度
    // context.setLineWidth(2)
    // context.moveTo(160, 100)
    // context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    // context.moveTo(140, 100)
    // context.arc(100, 100, 40, 0, Math.PI, false)
    // context.moveTo(85, 80)
    // context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    // context.moveTo(125, 80)
    // context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    // context.stroke()
    // //将画好的图形填充到画布中
    // context.draw()
    // var text = wx.createCanvasContext('qCanvas')
    // //设置填充的样式
    // text.setFillStyle('red')
    // //填充的位置x,y,宽度,高度
    // text.fillRect(0, 50, 150, 75)
    // text.draw()

    // context.setStrokeStyle("#ff0000");
    // context.setFillStyle("#00ff00");

    // context.rect(100, 0, 200, 100)
    // context.fill()

    // context.rect(0,100,100,100)
    // context.stroke()

    // context.rect(300,100,100,100)
    // context.stroke()

    // //开始一个新的路径,不会从其他位置连到开始角度上
    // context.beginPath();
    
    // //arc圆弧;x,y,半径,开始角度,终止角度
    // //2*Path.PI是360度  PI是π(圆周率)
    // context.arc(100,300,50,0,Math.PI);
    // context.rect(50,300,100,0);
    // context.stroke();
    // context.draw()

    // context.beginPath();
    // context.arc(100,150,100,0,2*Math.PI);
    // context.stroke();
/* 太极图案 */
    // //蓝色正方形
    // context.setFillStyle('blue');
    // context.rect(0,100,200,200);
    // context.fill();
    // //X轴不变
    // //黑色大半圆
    // context.beginPath();
    // context.setFillStyle('black');
    // context.arc(100,200,100,0.5*Math.PI,1.5*Math.PI);
    // context.fill();
    // //白色大半圆
    // context.beginPath();
    // context.setFillStyle('white');
    // context.arc(100,200,100,1.5*Math.PI,2.5*Math.PI);
    // context.fill();
    // //小黑色半圆
    // context.beginPath();
    // context.setFillStyle('black');
    // context.arc(100, 150, 50, 1.5 * Math.PI, 2.5 * Math.PI);
    // context.fill();
    // //小白色半圆
    // context.beginPath();
    // context.setFillStyle('white');
    // context.arc(100, 250, 50, 0.5 * Math.PI, 1.5 * Math.PI);
    // context.fill();
    // //小白色圆
    // context.beginPath();
    // context.setFillStyle('white');
    // context.arc(100, 150, 15, 0, 2*Math.PI);
    // context.fill();
    // //小黑色圆
    // context.beginPath();
    // context.setFillStyle('black');
    // context.arc(100, 250, 15, 0, 2 * Math.PI);
    // context.fill();
    // context.draw();

    //Y轴不变
    //蓝色正方形
    context.beginPath();
    context.setFillStyle('blue');
    context.rect(50, 50, 200, 200);
    context.fill();
    //大白色半圆
    context.beginPath();
    context.setFillStyle('white')
    context.arc(150, 150, 100, Math.PI,2*Math.PI);
    context.fill();
    //大黑色半圆
    context.beginPath();
    context.setFillStyle('black')
    context.arc(150, 150, 100, 0, Math.PI,);
    context.fill();
    //小黑色半圆
    context.beginPath();
    context.setFillStyle('black');
    context.arc(100, 150, 50, Math.PI, 2 * Math.PI);
    context.fill();
    //小白色半圆
    context.beginPath();
    context.setFillStyle('white');
    context.arc(200, 150, 50, 0,Math.PI);
    context.fill();
    //小白圆
    context.beginPath();
    context.setFillStyle('white');
    context.arc(100, 150, 10, 0, 2*Math.PI);
    context.fill();
    //小黑圆
    context.beginPath();
    context.setFillStyle('black');
    context.arc(200, 150, 10, 0, 2 * Math.PI);
    context.fill();
    context.draw();
  }
})
