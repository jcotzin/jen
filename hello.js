$(document).ready(function() {
  $('#nav-bar a').click(function() {
      $('a').removeClass('active');
      $(this).addClass('active');
  });

  if(screen.width > 900) {

    $('.show-title').hide();
    $('.experience').hide();
    $('.education').hide();
    $('.contact').hide();

    $('ul li:nth-child(2)').click(function() {
        $('.bio').hide();
        $('.education').hide();
        $('.contact').hide();
        $('.experience').show();
    });

    $('ul li:nth-child(3)').click(function() {
        $('.bio').hide();
        $('.contact').hide();
        $('.experience').hide();
        $('.education').show();
    });

    $('ul li:nth-child(4)').click(function() {
        $('.bio').hide();
        $('.education').hide();
        $('.experience').hide();
        $('.contact').show();
    });

    $('ul li:nth-child(1)').click(function() {
        $('.education').hide();
        $('.experience').hide();
        $('.contact').hide();
        $('.bio').show();
    });
    return;
} else {
    $('#nav-bar').hide();
    $('.show-title').show();
};



});
