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
   'paint':{
      'circle-opacity': 0.3,
      'circle-color':
        ['step',
          ['to-number', ['get', 'inspection_score']],
          '#aaaaaa',  
          45, '#440154',  // (45 - 80)
          80, '#3b528b',  // (80 - 85)
          85, '#21908d',  // (85 - 90)
          90, '#5dc963',  // (90 - 95)
          95, '#fde725'   // (95 - 100)
          ]
  },
    
  });

  console.log('My name is John');
  map.on('mouseenter', 'Restaurants', (e) => {
        var name = e.features[0]['properties']['business_name'];
        var textField = document.getElementById('restText');
        textField.innerHTML = name;
    })
})