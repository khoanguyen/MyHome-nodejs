"use strict"

window.c3r = window.c3r || {};

window.c3r.layout = {
    setupHandlers: function (jQuery) {
        jQuery(window).resize(function () {
            window.c3r.layout.invalidateSize();
        });
    },
    invalidateSize: function () {
        var pageHeight = document.documentElement.clientHeight;
        var pageWidth = document.body.clientWidth;
        var pages = jQuery('.page');

        pages.width(pageWidth);
        pages.height(pageHeight);

        var top = 0;
        for (let i = 1; i <= pages.length; i++) {
            jQuery(`#page${i}`).css('top', top);
            top += pageHeight;
        }

        console.log(`${pageWidth} x ${pageHeight}`);
    }
};