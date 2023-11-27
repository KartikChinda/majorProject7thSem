console.log("hello");
// function textToSpeech(){
//     if ('speechSynthesis' in window) {
//       // Function to speak the text
//       function speakText() {
//           const textToSpeak = "Please Speak your Password";
//           const utterance = new SpeechSynthesisUtterance(textToSpeak);
//           utterance.lang = 'en-US';
//           speechSynthesis.speak(utterance);
//       }
  
//       // Speak text on page load (try using a setTimeout for better compatibility)
//       setTimeout(speakText, 100);
//   } else {
//       alert('Text-to-speech not supported in this browser.');
//   }
//   }
//   textToSpeech();
  function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
       this.document.querySelector("#minicircle").style.transform=`translate(${dets.x}px,${dets.y}px)` 
    })
  }

  circleMouseFollower();
  let tl=gsap.timeline();
  tl.from("#left-content img, #left-content h1",{
    delay:1,
    opacity:0,
    duration:1,
    stagger:0.3,
    scale:0.4
  })
  tl.from("#right-content img ",{
    rotate:360,
    opacity:0,
    duration:1,
    scale:0.3
  })
  tl.from("#right-content h3",{
    opacity:0,
    x:"-10px",
    duration:1
  })
  tl.eventCallback("onComplete",function(){
      textToSpeech();
      console.log("Completed");
  })
  
  function textToSpeech(){
    if ('speechSynthesis' in window) {
      // Function to speak the text
      function speakText() {
          const textToSpeak = "Redirecting to Home Page";
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

  function changePg1() {
    document.getElementById('right-content').addEventListener('click', function (event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      // call at the end of the last function on the page. 
      relocate();
  
    });
  }
  changePg1();
  
  function relocate() {
    location.replace('index.html')
  }