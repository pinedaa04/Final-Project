$(document).ready(function () {
  var gunsUp = $('#fearless'); 
  var strat = $('#ramen');
  var disney = $('#hopeless');
  
  function loadFearless() {
    fearless.html('<div class="embed-responsive embed-responsive-16by9">' +
      '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/cerCZvBD-wE" frameborder="0" allowfullscreen></iframe></div>');
  }; 
    
  function loadRamen() {
    ramen.html('<div class="embed-responsive embed-responsive-16by9">' + 
      '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/AEB6ibtdPZc" frameborder="0" allowfullscreen></iframe></div>');
  };
  
  function loadHopeless() {
    hopeless.html('<div class="embed-responsive embed-responsive-16by9">' + 
      '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tlO-KOvpPOw" frameborder="0" allowfullscreen></iframe></div>');
  };
  
    window.onload = function () {
      setTimeout(loadFearless, 600);
      setTimeout(loadRamen, 800);
      setTimeout(loadHopeless, 1000);
  };
  
});
