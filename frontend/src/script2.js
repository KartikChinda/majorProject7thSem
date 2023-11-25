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

function relocate() {
  location.replace('index3.html')
}
