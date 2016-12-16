$(document).ready(function() {
  // $(function(){
  //   $('a').each(function() {
  //     if ($(this).prop('href') == window.location.href) {
  //       $(this).addClass('current-link');
  //     }
  //   });
  // });
  if(screen.width < 480) {
    // do any 480 width stuff here, or simply do nothing
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
