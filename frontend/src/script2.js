// function changePg2() {
//   document.getElementById('formid').addEventListener('submit', function (event) {
//     // Prevent the default form submission behavior
//     event.preventDefault();

//     // Redirect to 'index2.html' immediately
//     // call at the end of the last function on the page. 
//     relocate();

//   });
// }
// changePg2();
function circleMouseFollower(){
  window.addEventListener("mousemove",function(dets){
     this.document.querySelector("#minicircle").style.transform=`translate(${dets.x}px,${dets.y}px)` 
  })
}
circleMouseFollower();
setTimeout(function(){
  relocate();
  console.log("done");
},7000)
function relocate() {
  location.replace('index3.html')
}
function textToSpeech(){
  if ('speechSynthesis' in window) {
    // Function to speak the text
    function speakText() {

        const textToSpeak = "Congratulations , You've been registered to iSight, your password is forty two";
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    }

    // Speak text on page load (try using a setTimeout for better compatibility)
    setTimeout(speakText, 150);
} else {
    alert('Text-to-speech not supported in this browser.');
}
}
textToSpeech();

