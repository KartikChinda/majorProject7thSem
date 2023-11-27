function scroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
scroll()

function time() {
  let a = 0;
  setInterval(function () {
    a += Math.floor(Math.random() * 19);
    if (a > 100)
      a = 100;
    document.querySelector("#loader h1").innerHTML = a + "%";
  }, 150)
}
function anim() {
  let tl = gsap.timeline();
  tl.to("#loader h1", {
    scale: 1.2,
    delay: 0.5,
    duration: 2,
    onStart: time()
  })
  tl.to("#loader", {
    top: "-100%",
    duration: 0.5
  })

  tl.from("#nav,#nav #nav-icon img,#nav #heading h4, #nav #others", {
    opacity: 0,
    delay: 0.5,
    stagger: 0.4,

  })
  tl.from("#page1 #payment #payment-container", {
    x: "-40%",
    opacity: 0,
    duration: 1,

  })
  // tl.to("#nav #heading h4", {
  //   opacity: 0,
  //   delay: 0.7,
  //   duration: 0.5
  // })
  tl.to("#page1 #mix", {

    opacity: 0,
    scrollTrigger: {
      trigger: "#page1 #mix",
      scroller: "#main",
      // markers:true,
      start: "-3% 10%",
      end: "-3% 6%",
      scrub: 2
    }
  })
}
anim();
function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    this.document.querySelector("#minicircle").style.transform = `translate(${dets.x}px,${dets.y}px)`
  })
}
circleMouseFollower();
// function changePg(){
// document.getElementById('form-id').addEventListener('submit', function(event) {
//   // Prevent the default form submission behavior
//   event.preventDefault();

//   // Redirect to another HTML page
//   window.location.href = 'http://127.0.0.1:5500/src/html/index2.html';
//   setTimeout(function() {
//     window.location.href = 'http://127.0.0.1:5500/src/html/index.html';
//     console.log("Hello");
// }, 5000);
// });

// }
// changePg();

// function changePg() {
//   // Assuming 'form-id' is the correct ID of your form
//   document.getElementById('form-id').addEventListener('submit', function(event) {
//       // Prevent the default form submission behavior
//       event.preventDefault();

//       // Redirect to 'index2.html' immediately
//       window.location.href = 'http://127.0.0.1:5500/src/html/index2.html';

//       // Schedule the second redirection after a delay of 5 seconds

//   });
// //   setTimeout(function() {
// //     window.location.href = 'http://127.0.0.1:5500/src/html/index.html';
// // }, 5000);
// }

// // Call the function to set up the event listener
// changePg();

function changePg() {
  document.getElementById('form-id').addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Redirect to 'index2.html' immediately
    // call at the end of all work done. 
    relocate();

  });

}
changePg();

function relocate() {
  location.replace('index2.html')
}


// function textToSpeech()
// {
//    // Check for browser support
//    if ('speechSynthesis' in window) {
//     // Function to speak the text
//     function speakText() {
//         const textToSpeak = "Welcome to my website! This is an example of text-to-speech on button click.";
//         const utterance = new SpeechSynthesisUtterance(textToSpeak);
//         utterance.lang = 'en-US';
//         speechSynthesis.speak(utterance);
//     }

//     // Attach the function to the button click event
//     document.getElementById('speakButton').addEventListener('click', speakText);
// } else {
//     alert('Text-to-speech not supported in this browser.');
// }
// }
// function textToSpeech(){
//   if ('speechSynthesis' in window) {
//     // Function to speak the text
//     function speakText() {
//         const textToSpeak = "Start the Registration Process";
//         const utterance = new SpeechSynthesisUtterance(textToSpeak);
//         utterance.lang = 'en-US';
//         speechSynthesis.speak(utterance);
//     }

//     // Speak text on page load (try using a setTimeout for better compatibility)
//     setTimeout(speakText, 100);
// } else {
//     alert('Text-to-speech not supported in this browser.');
// }
// }
// textToSpeech();

// if (typeof(Storage) !== "undefined") {
//   var takenTour = localStorage.getItem("takenTour");
//   if (!takenTour) {
//     localStorage.setItem("takenTour", true);
//     // Take the tour
//   }
// }