import React, { useState, useEffect } from "react";
import '../css/Geolocation.css';

function Geolocation() {
  const [nearbyNgos, setNearbyNgos] = useState([]);
  const [userLocation, setUserLocation] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setUserLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
  
        const geocoder = new window.google.maps.Geocoder();
        const latlng = new window.google.maps.LatLng(latitude, longitude);
        geocoder.geocode({ 'location': latlng }, function(results, status) {
          if (status === 'OK') {
            if (results[0]) {
              // Extract state and city from the address components
              const addressComponents = results[0].address_components;
              const stateComponent = addressComponents.find(component => component.types.includes("administrative_area_level_1"));
              const cityComponent = addressComponents.find(component => component.types.includes("locality"));
              const state = stateComponent ? stateComponent.long_name.split(' ').join('-') : '';
              const city = cityComponent ? cityComponent.long_name.split(' ').join('-') : '';
              console.log(`State: ${state}, City: ${city}`);
              setCity(city);
              setState(state);
              console.log(`https://www.justdial.com/${city}-${state}/NGOS/nct-10337253`);
            } else {
              console.log('No results found');
            }
          } else {
            console.log(`Geocoder failed due to: ${status}`);
          }
        });
      });
    } else {
      console.log('Geolocation is not supported by this browser');
    }
  }, []);

  return (
    <div className="container glassmorphism geolocation-container" id="cont" style={{ display: "flex", justifyContent: "center", alignItems: "center" ,width:"30%", height:"30%" }}>
      <hr></hr>
      <h1><button className="button-71" role="button" variant="danger" onClick={() => window.location.href=`https://www.justdial.com/${city}-${state}/NGOS/nct-10337253`}>Nearby NGOs</button></h1>
      <hr></hr>
    </div>
  );
  
}

export default Geolocation;
