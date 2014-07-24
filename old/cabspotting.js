(function($) {
    //Menu
    $('#menu > a').live('click', function(e) {
        var a = $(this),
            href = a.attr('href');
        
        $.bbq.pushState('#' + href);
        
        $('#content > .section').hide();
        $("#content > .close, #content, #content > .section[data-href='" + href + "']").show();
        
        e.preventDefault();
    });

    $('a.close').live('click', function(e) {
        $('#content, a.close').hide();
        e.preventDefault();
    });
})(jQuery);