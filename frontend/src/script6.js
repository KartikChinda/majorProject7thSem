


function pass() {
  if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    // Get the input field
    const numberField = document.getElementById('numberField');
    const storedValue = localStorage.getItem('voicePass');
    // console.log("Stored value was: ", storedValue)

    let password = parseInt(storedValue, 10);
    console.log(" the password is" + window.sharedVariable)
    recognition.onresult = function (event) {
      const result = event.results[0][0].transcript;
      const number = parseFloat(result);
      console.log(number);
      if (!isNaN(number)) {
        // Update the value of the input field
        numberField.value = ``;
        //Voice 
        //relocate
        if (number == password) {
          setTimeout(function () {
            if ('speechSynthesis' in window) {
              // Function to speak the text
              function speakText() {
                const textToSpeak = "Password Matched";
                const utterance = new SpeechSynthesisUtterance(textToSpeak);
                utterance.lang = 'en-US';
                speechSynthesis.speak(utterance);
              }
              // Speak text on page load (try using a setTimeout for better compatibility)
              setTimeout(speakText, 100);
            } else {
              alert('Text-to-speech not supported in this browser.');
            }
            relocate();
          }, 1500);

        }
        else {
          setTimeout(function () {


            if ('speechSynthesis' in window) {
              // Function to speak the text
              function speakText() {
                const textToSpeak = "Password Not Matched";
                const utterance = new SpeechSynthesisUtterance(textToSpeak);
                utterance.lang = 'en-US';
                speechSynthesis.speak(utterance);
              }
              // Speak text on page load (try using a setTimeout for better compatibility)
              setTimeout(speakText, 100);
            } else {
              alert('Text-to-speech not supported in this browser.');
            }
          }, 1500);
        }
      } else {
        alert('Sorry, I couldn\'t recognize a valid number.');
      }
    };

    // Removed the line below to prevent automatic restart
    // recognition.onend = function() {
    //     recognition.start();
    // };

    document.getElementById('startButton').addEventListener('click', function () {
      recognition.start();
    });
  } else {
    alert('Speech recognition not supported in this browser.');
  }
}
pass();
function textToSpeech() {
  if ('speechSynthesis' in window) {
    // Function to speak the text
    function speakText() {
      const textToSpeak = "Please click on the right side of the screen and Speak your Password";
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
function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    this.document.querySelector("#minicircle").style.transform = `translate(${dets.x}px,${dets.y}px)`
  })
}
//  function changePg7() {
//     document.getElementById('upper').addEventListener('click', function (event) {
//       // Prevent the default form submission behavior
//       event.preventDefault();
//       // call at the end of the last function on the page. 
//       relocate();

//     });
//   }
//   changePg7();

function relocate() {
  location.replace('index7.html')
}
function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    this.document.querySelector("#minicircle").style.transform = `translate(${dets.x}px,${dets.y}px)`
  })
}
circleMouseFollower();