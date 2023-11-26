function changePg2(){
    document.getElementById('formid').addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Redirect to 'index2.html' immediately
      window.location.href = 'http://127.0.0.1:5500/src/html/index3.html';
    
  });
  }
changePg2();
function circleMouseFollower(){
  window.addEventListener("mousemove",function(dets){
     this.document.querySelector("#minicircle").style.transform=`translate(${dets.x}px,${dets.y}px)` 
  })
}
circleMouseFollower();