(function($) {
    //Initial setup
    
    var po = org.polymaps,
        map = po.map()
            .container($('#map')[0].appendChild(po.svg('svg')))
            .add(po.interact())
            .add(po.hash())
            .center({ lat: 37.7680, lon: -122.4259})
            .zoom(13);
    
    map.add(po.image()
        .url(po.url("http://spaceclaw.stamen.com/tiles/dotspotting/world/{Z}/{X}/{Y}.png")));

    map.add(po.compass()
        .pan("none"));
        
    var layer = po.geoJson();
    layer.tile(false);
    
    var style = po.stylist();
    
    style
        .attr("stroke", function(f) {
            return f.properties.status == "M" ? 'yellow' : 'red';
        })
        .attr("stroke-width", "3")
        .attr("fill", "none");
        
    layer.on('show', style);
    
    map.add(layer);
    
    //Data
    $.ajax({
        url: '/api/cab?cab=ojroigna',
        dataType: 'json',
        success: function(json) {
            var result = {
                type: "FeatureCollection",
                features: [
                    {
                        type: "Feature",
                        properties: {
                            cab: "vicks",
                            status: "M"
                        },
                        geometry: {
                            type: "LineString",
                            coordinates: [
                                [-122.4183852, 37.7627949],
                                [-122.41835832595825, 37.76347177759608],
                                [-122.41945266723633, 37.76344633268918],
                                [-122.41962432861328, 37.76504934472781],
                                [-122.42622256278992, 37.76462527084882],
                                [-122.42667317390442, 37.76916273516438]
                            ]
                        }
                    },
                    
                    {
                        type: "Feature",
                        properties: {
                            cab: "wedge",
                            status: "E"
                        },
                        geometry: {
                            type: "LineString",
                            coordinates: [
                                [-122.4246883392334, 37.77072321929914],
                                [-122.42509603500366, 37.77088435437199],
                                [-122.43166208267212, 37.77003627110171],
                                [-122.4325954914093, 37.774709089062235],
                                [-122.42932319641113, 37.77512462481790],
                                [-122.42950558662415, 37.77604897149003],
                                [-122.42459177970886, 37.77667650301129],
                                [-122.42495656013489, 37.77855058571027],
                                [-122.4216628074646, 37.77896609987392],
                                [-122.42223143577576, 37.78175592019900]
                            ]
                        }
                    }
                ]
            }
            
            layer.features(result.features);
            layer.reshow();
        }
    });
})(jQuery);