/**
 * Created by vidyachandasekhar on 6/3/17.
 */
//https://data.nationalservice.gov/resource/5vrv-88b8.json

var locations = [
    {lat:39.747591, lng:-75.547298},
    {lat:39.743236, lng:-75.551463},
    {lat:39.811145, lng:-75.554634},
    {lat:39.741675, lng:-75.546317},
    {lat:39.629433, lng:-75.745601},
    {lat:39.802654, lng:-75.465481},
    {lat:39.714285, lng:-75.594332},
    {lat:38.648760, lng:-75.624884},
    {lat:39.757818, lng:-75.606784},
    {lat:39.740084, lng:-75.632837},
    {lat:39.746716, lng:-75.546323},
    {lat:39.765995, lng:-75.540802},
    {lat:39.745181, lng:-75.547516},
    {lat:39.683489, lng:-75.751900},
    {lat:38.614085, lng:-75.202965},
    {lat:39.751476, lng:-75.543523},
    {lat:39.662916, lng:-75.750787},
    {lat:39.745917, lng:-75.548781},
    {lat:39.667799, lng:-75.701550}
]

function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {lat:39.7391, lng: -75.5398},
    });
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
//t0G5mYywzpCyW9pqr4RgNKaHk
function getvolteeringLocationArray(){
    var consumer = new soda.Consumer('data.nationalservice.gov');
    var volLocations = [];
    consumer.query()
        .withDataset('y4m3-siyk')
        .limit(100)
        .where({ location_name: 'Delaware' })
        .getRows()
        .on('success', function(rows) {volLocations = extractGeoLocation(rows); })
        .on('error', function(error) { console.error(error); });

}



function extractGeoLocation(rows) {
    var volLocations = [];
    rows.forEach(function(row) {
        volLocations.push({lat:parseFloat(row.location.latitude),lng:parseFloat(row.location.longitude)})
        console.log(row);
    });
    console.log(volLocations);
    initMap(volLocations);

}


