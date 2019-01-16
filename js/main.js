$(document).ready(function () {
    $(".button_right").click(function () {
        $(this).parents('#header').children('.popup_one').css({ display: "flex"});
    });
});
$(document).ready(function () {
    $(".back").click(function () {
        $(this).parents('.popup_one').css({ display: "none"});
    });
});
$(function () {
    $('.menu_icon').click(function () {
        $('.menu').slideToggle('show');
    });
  	$(window).resize(function() {      
      $('.menu').removeAttr('style');
  	});
});
$(document).ready(function(){
    $('.menu_icon').click(function (){
        if(!$('.menu_icon').hasClass('menu_transform')){
            $(this).addClass('menu_transform');
            $(this).children('.line').hide();
        } else {
            $('.menu_icon').removeClass('menu_transform');
            $('.line').show();
        }
    });
});
$(document).ready(function(){
    $('.top_button').click(function (){
        if(!$(this).hasClass('open')){
            $(this).addClass('open');
            $(this).parents('.container').children('.distributor').show();
        } else {
            $(this).parents('.container').children('.distributor').hide();
        	$(this).removeClass('open');
        }
    });
});

