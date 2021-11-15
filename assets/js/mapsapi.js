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
    var markers = [{
        coods: {
            lat: 52.63595,
            lng: 4.73622,
        },
        iconImage: "http://maps.google.com/mapfiles/kml/pal3/icon48.png",
        infoText: " <a href='https://www.airbnb.com/rooms/29029231?adults=2&check_in=2021-11-17&check_out=2021-12-08&federated_search_id=b6df54fd-c709-46e6-a977-5d050010486c&source_impression_id=p3_1637015701_%2BQ%2FWoWZbXtyBkv0z&guests=1' target='_blank'>Home1</a>",
    },
  
    {
        coods: {
            lat: 52.63657,
            lng: 4.75619,
        },
        iconImage: "http://maps.google.com/mapfiles/kml/pal3/icon48.png",
        infoText: "<a href=' https://www.airbnb.com/rooms/43871050?adults=2&check_in=2021-11-17&check_out=2021-12-08&federated_search_id=b6df54fd-c709-46e6-a977-5d050010486c&source_impression_id=p3_1637015801_q%2F9xqeYFp%2BnR8Zy9&guests=1' target='_blank'>Home2</a>",
    },
  
    {
        coods: {
            lat: 52.6378,
            lng: 4.7408,
        },
        iconImage: "http://maps.google.com/mapfiles/kml/pal3/icon48.png",
        infoText: "<a href=' https://www.airbnb.com/rooms/31505855?adults=2&check_in=2021-11-17&check_out=2021-12-08&federated_search_id=b6df54fd-c709-46e6-a977-5d050010486c&source_impression_id=p3_1637015838_7S3ZtgMpt8dczqIx&guests=1' target='_blank'>Home3</a>",
    },
  
    {
        coods: {
            lat: 52.6438,
            lng: 4.7638,
        },
        iconImage: "http://maps.google.com/mapfiles/kml/pal3/icon48.png",
        infoText: "<a href=' https://www.airbnb.com/rooms/13454757?adults=2&check_in=2021-11-17&check_out=2021-12-08&federated_search_id=b6df54fd-c709-46e6-a977-5d050010486c&source_impression_id=p3_1637015884_HDjAb2iFk%2BPRA%2FeX&guests=1' target='_blank'>Home4</a>",
    },
  
    {
        coods: {
            lat: 52.6373,
            lng: 4.7527,
        },
        iconImage: "http://maps.google.com/mapfiles/kml/pal3/icon48.png",
        infoText: "<a href=' https://www.airbnb.com/rooms/43563011?adults=2&check_in=2021-11-17&check_out=2021-12-08&federated_search_id=b6df54fd-c709-46e6-a977-5d050010486c&source_impression_id=p3_1637015912_R5KtSt1Q4sONQ1QA&guests=1' target='_blank'>Home5</a>",
    }];
  
    markers.forEach(element=>addMarker(element));
  
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