// if ('webkitSpeechRecognition' in window) {
//     const recognition = new webkitSpeechRecognition();
//     recognition.lang = 'en-US';
//     recognition.interimResults = false;

//     // Get the input field
//     const numberField = document.getElementById('numberField');

//     recognition.onresult = function(event) {
//         const result = event.results[0][0].transcript;
//         const number = parseFloat(result);

//         if (!isNaN(number)) {
//             // Update the value of the input field
//             numberField.value = number;
//         } else {
//             alert('Sorry, I couldn\'t recognize a valid number.');
//         }
//     };

//     recognition.onend = function() {
//         recognition.start();
//     };

//     document.getElementById('startButton').addEventListener('click', function() {
//         recognition.start();
//     });
// } else {
//     alert('Speech recognition not supported in this browser.');
// }
function addvoice() {
  if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    // Get the input field
    const numberField = document.getElementById('numberField');

    recognition.onresult = function (event) {
      const result = event.results[0][0].transcript;
      const number = parseFloat(result);

      if (!isNaN(number)) {
        // Update the value of the input field
        numberField.value = `\t\t\t${number}`;
        textToSpeech1();
        //Voice 
        //relocate

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
addvoice();
function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    this.document.querySelector("#minicircle").style.transform = `translate(${dets.x}px,${dets.y}px)`
  })
}
circleMouseFollower();
function textToSpeech1() {
  if ('speechSynthesis' in window) {
    // Function to speak the text
    function speakText() {
      const selected = document.querySelector("input");
      const amt = selected.value;
      const textToSpeak = `The Amount Entered Is ${amt}`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);

      //   addvoice();

    }

    // Speak text on page load (try using a setTimeout for better compatibility)
    setTimeout(speakText, 100);
  } else {
    alert('Text-to-speech not supported in this browser.');
  }
}

function textToSpeech() {
  if ('speechSynthesis' in window) {
    // Function to speak the text
    function speakText() {
      const textToSpeak = "Please click on the right side of the screen and speak out the amount you want to pay";
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);

      //   addvoice();

    }

    // Speak text on page load (try using a setTimeout for better compatibility)
    setTimeout(speakText, 1500);
  } else {
    alert('Text-to-speech not supported in this browser.');
  }
}
textToSpeech();

function changePg6() {
  document.getElementById('numberField').addEventListener('click', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // call at the end of the last function on the page. 
    relocate();

  });
}
changePg6();
function relocate() {
  location.replace('index6.html')
}