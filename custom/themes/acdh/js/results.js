jQuery(function ($) {
"use strict"; 
/* You can safely use $ in this code block to reference jQuery */

//Expand or collapse summary on results view
$(document ).delegate( ".res-act-button-summary", "click", function(e) {
//$('.res-act-button-summary').on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('closed')) {
        $(this).parent().siblings('.res-property-desc').fadeIn(200);
        $('.res-act-button-summary .hide_summary').show();
        $('.res-act-button-summary .show_summary').hide();
        $(this).removeClass('closed');
        $(this).addClass('open');
        $(this).children('i').text('remove');
        e.preventDefault();
    } else {
        $('.res-act-button-summary .hide_summary').hide();
        $('.res-act-button-summary .show_summary').show();
        $(this).parent().siblings('.res-property-desc').fadeOut(200);
        $(this).removeClass('open');
        $(this).addClass('closed');
        $(this).children('i').text('add');
        e.preventDefault();
    }
    e.preventDefault();
});

//Toggle expert or basic view on single resource
$(document ).delegate( ".res-act-button-expertview", "click", function(e) {
//$('.res-act-button-expertview').click(function() {
    if ($(this).hasClass('basic')) {
        $('.single-res-overview-basic').hide();
        $('.single-res-overview-expert').fadeIn(200);
        $(this).removeClass('basic');
        $(this).addClass('expert');
        $(this).children('span').text(Drupal.t('Switch to Basic-View'));
    } else {
        $('.single-res-overview-expert').hide();
        $('.single-res-overview-basic').fadeIn(200);
        $(this).removeClass('expert');
        $(this).addClass('basic');
        $(this).children('span').text(Drupal.t('Switch to Expert-View'));
    }
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Get today's date in the preferred format
function todaysDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 
    var today = yyyy+''+''+mm+''+dd;
    return today;
}

/* You can safely use $ in this code block to reference jQuery */
});
