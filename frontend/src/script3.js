function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
       this.document.querySelector("#minicircle").style.transform=`translate(${dets.x}px,${dets.y}px)` 
    })
  }
  circleMouseFollower();
  document.querySelector("#box").addEventListener("mouseenter",function(){
    document.querySelector("#minicircle").style.backgroundColor=`#BBDEc9`;
  })
  document.querySelector("#box").addEventListener("mouseleave",function(){
    document.querySelector("#minicircle").style.backgroundColor=`#f0a3a39c`;
  })
  