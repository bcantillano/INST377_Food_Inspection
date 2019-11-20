var baseUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var baseAttribution = 'Data, imagery and map information provided by <a href="http://open.mapquest.co.uk" target="_blank">MapQuest</a>, <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>';
var center = new L.LatLng(38.7849, -76.872);
var maxZoom = 20;
var opacity = 1.0;
var subdomains = 'abc';
var basemap = new L.TileLayer(baseUrl, {maxZoom: maxZoom, attribution: baseAttribution, subdomains: subdomains, opacity: opacity });
var map = new L.Map('mapid', {
    center: center,
    zoom: 10,
    maxZoom: maxZoom,
    layers: [basemap],
});
map.setView([38.7849, -76.872],10);



function pushToArray(arr, obj) {
    const index = arr.findIndex((e) => e.properties.establishment_id === obj.properties.establishment_id);
    if (index === -1) {
        arr.push(obj);
    } else {
        if(arr[index].inspection_date>obj.inspection_date){
        arr[index] = obj;
    }
 }
 return arr;
}



   
var data =$.ajax({
    url: "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.geojson",
    dataType: "json",
    success: console.log("Data successfully loaded."),
    error: function(xhr) {
        alert(xhr.statusText)
    }
})
$.when(data).done(function() {
    var markers = new L.MarkerClusterGroup();
    var points;
    var unclean= data.responseJSON;
    var clean=[]
    for(var i=0;i<unclean.features.length;i++){
       var temp= unclean.features[i];
       clean= pushToArray(clean,temp,unclean);
    }
    console.log(clean.length)
    points = L.geoJSON(clean).addTo(map);
    markers.addLayer(points);
    map.addLayer(markers);
});


/*for (var i=0;i<30;i++)
{
    var mark=data[i];
    console.log(data.location);
}*/