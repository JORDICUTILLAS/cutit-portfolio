
jQuery(window).scroll(function () {
    var threshold = 200;
    if  (jQuery(window).scrollTop() >= 200)
        jQuery('header').addClass('fixed');              

    else
        jQuery('header').removeClass('fixed');
    var threshold = 200;
    if  (jQuery(window).scrollTop() >= 200)
        jQuery('nav').addClass('fixed');              

    else
        jQuery('nav').removeClass('fixed'); 
    var threshold = 200;
    if  (jQuery(window).scrollTop() >= 200)
        jQuery('#logo').addClass('logo-fixed');             

    else
        jQuery('#logo').removeClass('logo-fixed');
    var threshold = 200;
    if  (jQuery(window).scrollTop() >= 200)
        jQuery('#logo').removeClass('sign');             

    else
        jQuery('#logo').addClass('sign');
});
