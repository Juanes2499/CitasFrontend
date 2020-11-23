import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./NodeMap.css";
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';



const NodeMap = (props) => {
 
  const position = { lat: props.nodes[0].lat, lng: props.nodes[0].long };
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    L.Marker.prototype.options.icon = DefaultIcon;

  return (
      <MapContainer center={position} zoom={5}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {props.nodes.map((node, i) => {
        var nodeposition = {lat: node.lat, lng: node.long}
        return (

          <Marker
            key={i}
            position={nodeposition}
            onMouseOver={e => {
              e.target.openPopup();
            }}
            onMouseOut={e => {
              e.target.closePopup();
            }}
          >

            <Popup>Nodo {node.numnode}, lat:{node.lat}, long:{node.long}</Popup>
          </Marker>
        );
      })}
      </MapContainer>
  );
};

export default NodeMap;
