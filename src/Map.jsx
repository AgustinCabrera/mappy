import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
const options = {
  zoomControlOptions: {
    position:'right-center' ,
  }
}
function MyComponent() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPKEY
  })
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };


  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that
    //const onLoad = React.useCallback(
     // function onLoad (mapInstance) {
        // do something with map Instance
    //  }
   // )
    return <GoogleMap
      options={options}
      mapContainerStyle={containerStyle}
       center={center}
       zoom={10}
   //   onLoad={onLoad}
    >
      {
        // ...Your map components
      }
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