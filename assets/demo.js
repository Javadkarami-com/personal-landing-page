

// This can be used to set the Particles Effects. Check README for more details!
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#696969',
    lineColor: '#696969'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);



// jQuery plugin example:
// $(document).ready(function() {
//   $('#particles').particleground({
//     dotColor: '#696969',
//     lineColor: '#696969'
//   });
//   $('.intro').css({
//     'margin-top': -($('.intro').height() / 2)
//   });
// });
