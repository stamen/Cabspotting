(function($) {
    //Initial setup
    var po = org.polymaps;

    var map = po.map()
        .container($('#map')[0].appendChild(po.svg('svg')))
        .add(po.interact())
        .add(po.hash())
        .center({ lat: 37.7680, lon: -122.4259})
        .zoom(13);

    map.add(po.image()
        .url(po.url("http://{S}tile.cloudmade.com"
        + "/170956ae8c5a4a2aae49fa000a2c3f89"
        + "/998/256/{Z}/{X}/{Y}.png")
        .hosts(["a.", "b.", "c.", ""])));

    map.add(po.compass()
        .pan("none"));
        
    //Data
    $.ajax({
        url: 'http://cabspotting.org/cabs.xml.php?m=60',
        success: function(xhr) {
            console.log(xhr)
            //var json = xml2json.parser(xhr.responseText);
            //console.dir(json);
        }
    });
})(jQuery);