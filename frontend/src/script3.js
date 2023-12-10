function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    this.document.querySelector("#minicircle").style.transform = `translate(${dets.x}px,${dets.y}px)`
  })
}
circleMouseFollower();
document.querySelector("#box").addEventListener("mouseenter", function () {
  document.querySelector("#minicircle").style.backgroundColor = `#BBDEc9`;
})
document.querySelector("#box").addEventListener("mouseleave", function () {
  document.querySelector("#minicircle").style.backgroundColor = `#f0a3a39c`;
})

function changePg3() {
  document.getElementById('paybtn').addEventListener('click', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // call at the end of the last function on the page. 
    relocate();

  });
}
changePg3();

function relocate() {
  location.replace('index4.html')
}
function textToSpeech() {
  if ('speechSynthesis' in window) {
    // Function to speak the text
    function speakText() {
      const textToSpeak = "Please click in the center on the pay now button to Proceed";
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }

    // Speak text on page load (try using a setTimeout for better compatibility)
    setTimeout(speakText, 1500);
  } else {
    alert('Text-to-speech not supported in this browser.');
  }
}
textToSpeech();
