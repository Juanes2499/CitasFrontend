import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./NodeMap.css";
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';



const NodeMap = () => {
  const position = { lat: -33.8478796, lng: 150.7918932 };
    const position2 = { lat: -25.8478796, lng: 150.7918932 };
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    L.Marker.prototype.options.icon = DefaultIcon;

  return (
      <MapContainer center={position} zoom={8}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={position}      
        onMouseOver={e => {
          e.target.openPopup();
        }}
        onMouseOut={e => {
          e.target.closePopup();
        }}
      >
        
        <Popup>Sydney</Popup>
      </Marker>
      <Marker 
        position={position2}
        onMouseOver={e => {
          e.target.openPopup();
        }}
        onMouseOut={e => {
          e.target.closePopup();
        }}
      >
        
        <Popup>Sydney</Popup>
      </Marker>
      </MapContainer>
  );
};

export default NodeMap;
