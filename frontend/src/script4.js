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
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    // Get the input field
    const numberField = document.getElementById('numberField');

    recognition.onresult = function(event) {
        const result = event.results[0][0].transcript;
        const number = parseFloat(result);

        if (!isNaN(number)) {
            // Update the value of the input field
            numberField.value = `                ${number}`;
        } else {
            alert('Sorry, I couldn\'t recognize a valid number.');
        }
    };

    // Removed the line below to prevent automatic restart
    // recognition.onend = function() {
    //     recognition.start();
    // };

    document.getElementById('startButton').addEventListener('click', function() {
        recognition.start();
    });
} else {
    alert('Speech recognition not supported in this browser.');
}

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
  