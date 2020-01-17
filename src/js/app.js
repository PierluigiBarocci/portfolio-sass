var $ = require('jquery');

$(document).ready(function(){
    // alert('ok');
    $('.menu-btn').click(function(){
        var clicked = $(this);
        if (!clicked.hasClass('close')) {
            $(this).addClass('close');
            $('.menu-branding').addClass('show');
            $('.menu-nav').addClass('show');
        } else {
            $(this).removeClass('close');
            $('.menu-branding').removeClass('show');
            $('.menu-nav').removeClass('show');
        }
    });
});
