
function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
       this.document.querySelector("#minicircle").style.transform=`translate(${dets.x}px,${dets.y}px)` 
    })
  }
circleMouseFollower();
//   function changePg4() {
//     document.getElementById('rightcontent').addEventListener('click', function (event) {
//       // Prevent the default form submission behavior
//       event.preventDefault();
//       // call at the end of the last function on the page. 
//       relocate();
  
//     });
//   }
//   changePg4();
  setTimeout(function(){
    relocate();
  },5000)
  function relocate() {
    location.replace('index5.html')
  }
  function textToSpeech(){
    if ('speechSynthesis' in window) {
      // Function to speak the text
      function speakText() {
          const textToSpeak = "Your QR code was successfully scanned";
          const utterance = new SpeechSynthesisUtterance(textToSpeak);
          utterance.lang = 'en-US';
          speechSynthesis.speak(utterance);
      }
  
      // Speak text on page load (try using a setTimeout for better compatibility)
      setTimeout(speakText, 100);
  } else {
      alert('Text-to-speech not supported in this browser.');
  }
  }
  textToSpeech();
