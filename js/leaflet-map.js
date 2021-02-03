var mymap = L.map('map', {
    zoomControl: false
}).setView([52.3074723, 19.1340209], 5);
// mymap.scrollWheelZoom.disable()

// Map provider
var OpenStreetMap_BlackAndWhite = L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


// Shapes
var circle = L.circle([50.8596628, 17.4276751], {
    stroke: false,
    color: '#00aaff',
    fillColor: '#00aaff',
    fillOpacity: 0.4,
    opacity: 0.1,
    radius: 100000,
});

// Brzeg marker
var marker = new L.marker([50.85176,17.45952], {
    opacity: 1
});
// marker.bindTooltip("Brzeg", {
//     permanent: true,
//     className: "city-name",
//     offset: [0, 0],
//     direction: 'center'
// });

// Poland contour
var myGeoJSONPath = 'images/poland.json';
var myCustomStyle = {
    stroke: false,
    fill: true,
    fillColor: '#00aaff',
    fillOpacity: .3
}
var poland_contour = L.geoJSON();

$.getJSON(myGeoJSONPath,
    function (data) {
        poland_contour.addData(data).setStyle(myCustomStyle);
    });
    
// Adding to map
OpenStreetMap_BlackAndWhite.addTo(mymap);
poland_contour.addTo(mymap);
circle.addTo(mymap);
marker.addTo(mymap);