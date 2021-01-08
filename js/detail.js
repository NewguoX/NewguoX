// 放大镜
 //获取操作对象 
 var box=document.querySelector('.detail-left')
 var rightBox=document.querySelector('.rightBox')
 var rightImg=rightBox.querySelector('img')
 var mark=document.querySelector('.mark')
 var detail=document.querySelector('.detail')
    //移动函数
    function move(e){
  //获取当坐标点
  var x1=e.pageX-box.offsetLeft-parseInt(mark.offsetWidth/2)
  var y1=e.pageY-box.offsetTop-parseInt(mark.offsetHeight/2)
  //设置遮藏层的移动范围
  var maxX=box.offsetWidth-mark.offsetWidth
  var maxY=box.offsetHeight-mark.offsetHeight
  var minX=minY=0
  //设置右边图片的移动距离
  var x2,y2
  //判断当前是否在大盒子中移动
  if(x1<minX){
      mark.style.left=minX+'px'
      x2=0
  }else if(x1>maxX){
      mark.style.left=maxX+'px'
      x2=maxX
  }else{
      mark.style.left=x1+'px'
      x2=x1
  }
  if(y1<minY){
      mark.style.top=minY+'px'
      y2=0
  }else if(y1>maxY){
      mark.style.top=maxY+'px'
      y2=maxY
  }else{
      mark.style.top=y1+'px'
      y2=y1
  }
  //让右边图片进行移动
  rightImg.style.left=-2*x2+'px'
  rightImg.style.top=-2*y2+'px'
}
    
 // 给对象box添加事件
 detail.onmouseover=function(e){
  var e = e || window.event
  var target = e.target || e.srcElement
 mark.style.display='block'
 rightBox.style.display='block'
  //移动函数
  move(e)
}
 detail.onmousemove=function(e){
  var e = e || window.event
  move(e)
}
 detail.onmouseleave=function(e){
  var e = e || window.event
  var target = e.target || e.srcElement
 mark.style.display='none'
 rightBox.style.display='none' 
}