$(document).ready(function() {
  $('.open-overlay').click(function() {
    toggleOverlayMenu();
  });

  $('nav ul li a').click(function() {
    toggleOverlayMenu();
  });

  function toggleOverlayMenu() {
    
    $('.open-overlay').css('pointer-events', 'none');
    var overlay_navigation = $('.overlay-navigation')

    overlay_navigation.toggleClass('overlay-active');
    if (overlay_navigation.hasClass('overlay-active')) {

      
      overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
      overlay_navigation.velocity('transition.slideLeftIn', {
        duration: 300,
        delay: 0,
        begin: function() {
          $('nav ul li').velocity('transition.perspectiveLeftIn', {
            stagger: 150,
            delay: 0,
            complete: function() {
              $('nav ul li a').velocity({
                opacity: [1, 0],
              }, {
                delay: 10,
                duration: 140
              });
              $('.open-overlay').css('pointer-events', 'auto');
            }
          })
        }
      })

    } else {
      $('.open-overlay').css('pointer-events', 'none');
      
      overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
      $('nav ul li').velocity('transition.perspectiveRightOut', {
        stagger: 150,
        delay: 0,
        complete: function() {
          overlay_navigation.velocity('transition.fadeOut', {
            delay: 0,
            duration: 300,
            complete: function() {
              $('nav ul li a').velocity({
                opacity: [0, 1],
              }, {
                delay: 0,
                duration: 50
              });
              $('.open-overlay').css('pointer-events', 'auto');
            }
          });
        }
      });
    }
    
  }
});
