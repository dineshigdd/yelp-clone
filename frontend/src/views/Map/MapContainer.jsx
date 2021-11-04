import React, { useState } from 'react'
import { GoogleMap, LoadScript,InfoWindow, Marker  } from '@react-google-maps/api';





function MapContainer() {

  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
  }

  const mapStyles = {        
    height: "100vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }



  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 41.3954,
        lng: 2.162 
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 41.3917,
        lng: 2.1649
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 41.3773,
        lng: 2.1585
      },
    },
   
  ];
  
  // AIzaSyCExex13Z6nuF7R9m6au0cxPD9uLaAvfsw
  

  return (
    <LoadScript googleMapsApiKey=''>
        <GoogleMap
          zoom={13}
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
        {
              locations.map(item => {
                return (
                <Marker 
                    key={item.name} 
                    position={item.location}
                    onMouseOver = { ()=> onSelect( item )}/>
                )
              })
          }
          
          {
            selected.location && 
            (
              <InfoWindow
                  position = { selected.location }
                  clickable = { true }
                  onCloseClick = { ()=> setSelected({})}
                >
                  <p>{ selected.name }</p>
                </InfoWindow>
            )
          }
      </GoogleMap>
    </LoadScript>
  )
}


export default React.memo(MapContainer);

