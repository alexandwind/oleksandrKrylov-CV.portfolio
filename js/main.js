$(document).ready(function () {
   upbtn();
 });

function upbtn() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
      $('.up-btn').addClass('show');
    } else {
      $('.up-btn').removeClass('show');
    }
  });
  $('.up-btn').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('html, body, .wrapper').animate({ scrollTop: top - 85 }, 1000);
  });
}

