mapboxgl.accessToken = 'pk.eyJ1Ijoiandpc2U5OTQyIiwiYSI6ImNtMXRpMHExdDAyazUybXEwaDNnZGp6NGsifQ.6bkGUaSaQhH8PNZYjbjTZQ';

const map = new mapboxgl.Map({
  container: 'John', // container id
  style: 'mapbox://styles/jwise9942/cm3hks9oq00am01ry5paya5xf', // replace this with your style URL
  center: [-122.41214, 37.78077],
  zoom: 13,
  pitch: 34.00,
  bearing: -11.20,
  minZoom: 9

});

map.on('load', function () {
  // console.log("whatever");

  map.addSource('restaurantSource',{
        'type':'vector',
        'url': 'mapbox://jwise9942.0w0rkzj9',
      });

  map.addLayer({
    "id": "Restaurants",
    "type": "circle",
    "source": "restaurantSource",
    "source-layer": "Historical_Restaurant_Inspect-20z3jy",
    "paint": {
      "circle-color": "#008F8C",
  },
    
  });
})