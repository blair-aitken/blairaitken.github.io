document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

window.onscroll = function() {
  var backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

document.getElementById('backToTopBtn').addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

$(document).ready(function(){

  $('.right-scroll').click(function(){
    $('.scrollable-display').animate({
      scrollLeft: '+=300'
    }, 'slow');
  });

  // Function to scroll left
  $('.left-scroll').click(function(){
    $('.scrollable-display').animate({
      scrollLeft: '-=300'
    }, 'slow');
  });
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('active');
});
