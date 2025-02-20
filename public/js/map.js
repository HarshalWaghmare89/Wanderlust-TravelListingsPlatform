const map = new maplibregl.Map({
  container: 'map',
  style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // stylesheet location
  center: listings.geometry.coordinates, // starting position [lng, lat]
  zoom: 8, // starting zoom
  scrollZoom: false // Disable zooming with the scroll wheel
});


const marker = new maplibregl.Marker({color : 'red'})
        .setLngLat(listings.geometry.coordinates)
        .setPopup(new maplibregl.Popup({offset : 20}).setHTML(`${listings.location},${listings.country} Exact Location for Booking`))
        .addTo(map);

       
        map.addControl(new maplibregl.NavigationControl({
          visualizePitch: false,
          visualizeRoll: false,
          showZoom: true,
          showCompass: true
      }));
         