import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import './Map.css'
import Polygon from './components/polygon'
const options = {
  zoomControlOptions: {
    position:'right-center' ,
  }
}

function parseLocation(location){
const [latitud,longitud]=location.split(',');
return {
  latitud:Number(latitud),
  longitud:Number(longitud)
}
}


function MyComponent(props) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPKEY
  })
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%"
  };
  const {latitud, longitud} = parseLocation(props.location)
  const center = {
    lat: latitud || 42.10268,
    lng: longitud || -72.58676
  };


  const renderMap = () => {
    return <GoogleMap mapContainerClassName='map-container' 
     
      options={options}
      mapContainerStyle={containerStyle}
       center={center}
       zoom={10}
   //   onLoad={onLoad}
    >
    <Polygon></Polygon>
    </GoogleMap>
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() :
   <div>
  algo
  </div>
}
export default MyComponent 