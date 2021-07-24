/*map api*/
function initMap() {
    //map options
    var options = {
        zoom: 10,
        center: {
            lat: 52.63595,
            lng: 4.73622,
        },
    };
  
    //new map
    var map = new google.maps.Map(document.getElementById("map"), options);
  
    //duke attempt map
    var marker = addMarker({
        coods: {
            lat: 52.63595,
            lng: 4.73622,
        },
        iconImage: "http://maps.google.com/mapfiles/kml/pal3/icon48.png",
        infoText: "<p> url: https://www.airbnb.com/rooms/36616246?translate_ugc=false&federated_search_id=bf8cacc9-3df5-4805-bb09-255765468282&source_impression_id=p3_1627050299_2WskDflabalWA29%2B&guests=1&adults=1 </p>",
    });
  
    var marker2 = addMarker({
        coods: {
            lat: 52.63657,
            lng: 4.75619,
        },
        iconImage: "http://maps.google.com/mapfiles/kml/pal3/icon48.png",
        infoText: "<p> url: https://www.airbnb.com/rooms/43590586?translate_ugc=true&federated_search_id=bf8cacc9-3df5-4805-bb09-255765468282&source_impression_id=p3_1627050148_EbY041kBbAXwQiW2&guests=1&adults=1 </p>",
    });
  
    var marker3 = addMarker({
        coods: {
            lat: 52.6378,
            lng: 4.7408,
        },
        iconImage: "http://maps.google.com/mapfiles/kml/pal3/icon48.png",
        infoText: "<p> url: https://www.airbnb.com/rooms/50113014?translate_ugc=true&federated_search_id=bf8cacc9-3df5-4805-bb09-255765468282&source_impression_id=p3_1627050215_HMdYkj3m1L%2F8Ucei&guests=1&adults=1 </p>",
    });
  
    var marker4 = addMarker({
        coods: {
            lat: 52.6438,
            lng: 4.7638,
        },
        iconImage: "http://maps.google.com/mapfiles/kml/pal3/icon48.png",
        infoText: "<p> url: https://www.airbnb.com/rooms/9866644?translate_ugc=false&federated_search_id=bf8cacc9-3df5-4805-bb09-255765468282&source_impression_id=p3_1627050257_nWq5OAljXe90z%2BtC&guests=1&adults=1 </p>",
    });
  
    var marker5 = addMarker({
        coods: {
            lat: 52.6373,
            lng: 4.7527,
        },
        iconImage: "http://maps.google.com/mapfiles/kml/pal3/icon48.png",
        infoText: "<p> url: https://www.airbnb.com/rooms/36616246?translate_ugc=false&federated_search_id=bf8cacc9-3df5-4805-bb09-255765468282&source_impression_id=p3_1627050299_2WskDflabalWA29%2B&guests=1&adults=1 </p>",
    });
  
  
  
    //duke attempt marker function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coods,
            map: map,
            icon: props.iconImage,
        });
  
        var infoWindow = new google.maps.InfoWindow({
            content: props.infoText,
        });
  
        marker.addListener("click", function () {
            infoWindow.open(map, marker);
        });
  
        return marker;
    }
  }