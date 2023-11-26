function changePg2() {
  document.getElementById('formid').addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Redirect to 'index2.html' immediately
    // call at the end of the last function on the page. 
    relocate();

  });
}
changePg2();
function circleMouseFollower(){
  window.addEventListener("mousemove",function(dets){
     this.document.querySelector("#minicircle").style.transform=`translate(${dets.x}px,${dets.y}px)` 
  })
}
circleMouseFollower();

function relocate() {
  location.replace('index3.html')
}
