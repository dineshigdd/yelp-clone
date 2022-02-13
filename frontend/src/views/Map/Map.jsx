// import MapContainer from "./MapContainer";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, {useState} from "react";
import { useSelector  } from 'react-redux';
import './Map.scss';
import { Icon } from "leaflet";
// import * as parkData from "./samplePark.json";

export default function Map() {
  const [ activePark, setActivePark ] = useState(null);
  const { businesses } =  useSelector( ({ state }) => state.businesses );
  const { longitude, latitude } = useSelector( ({ state }) => state.region );
 

   const position = [ latitude , longitude ];
  /*const skater = new Icon({
    iconUrl: "/skateboarding.svg",
    iconSize: [25, 25]
  });
 */
console.log(position)

//  longitude: -118.32138061523438, latitude: 34.0615895441259}

  return (
      <MapContainer center={ position } zoom={ 10 } scrollWheelZoom={false}>
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


</MapContainer>
    
  
     
  )
}
//https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications