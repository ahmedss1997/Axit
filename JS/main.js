

$(document).ready(function () {
  'use strict';
  
  $(window).scroll(function () {
    var navbar = $('.navbar');
    if ($(window).scrollTop() >= navbar.height()) {
      navbar.addClass('scrolled');
    } else {
      navbar.removeClass('scrolled');
    }
  });
  
  // Deal With Tabs Section
  
  $('.tab-switch li').on("click", function () {
    $(this).toggleClass('selected').siblings().removeClass('selected');
    $('section.tabs .tabs-content > div').hide();
    $('.' + $(this).data('class')).fadeIn(2000);
  })
  
});