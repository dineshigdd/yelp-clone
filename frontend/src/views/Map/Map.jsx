// import MapContainer from "./MapContainer";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent } from 'react-leaflet'
import React, {useEffect, useState} from "react";
import { useSelector  } from 'react-redux';
import './Map.scss';
import { Icon,  } from "leaflet";
// import * as parkData from "./samplePark.json";


export default function Map({center}) {

  const { businesses } =  useSelector( ({ state }) => state.businesses );
  const { longitude, latitude } = center;
 
  
  //  const region = [ latitude , longitude ];
  /*const skater = new Icon({
    iconUrl: "/skateboarding.svg",
    iconSize: [25, 25]
  });
 */
console.log(longitude)

function MapView() {
  let map = useMap();
  map.setView( [  latitude , longitude ] , map.getZoom());
 
  return null
}


  return (
      <MapContainer center={[  latitude , longitude ]}
         zoom={ 10 } scrollWheelZoom={false}>
          <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  
  {businesses.map( item => (
    
        <Marker
          key={ item.id }
          position={[
            item.coordinates.latitude,
            item.coordinates.longitude
          ]}
          
        >
            <Popup>
              { item.name }
            </Popup>
         

        </Marker>
      ))}

    <MapView />
</MapContainer>
  )
}
//https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications