jQuery(function () {
    //alert("ok");
    c3r.layout.setupHandlers(jQuery);

    jQuery('.nav-menu-item').click(function (evt) {
        var target = jQuery(evt.target);
        var pageId = target.data('target-page');
        var page = jQuery(`#${pageId}`);
       
        jQuery('html, body').animate({
            scrollTop: page.offset().top
        }, 1000);

        evt.preventDefault();
    });    
});