import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./NodeMap.css";
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';



const NodeMap = (props) => {
 // console.log(props)
  const position = { lat: props.nodes[0].Latitud, lng: props.nodes[0].Longitud };
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <MapContainer center={position} zoom={11}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {props.nodes.map((node, i) => {
        var nodeposition = { lat: node.Latitud, lng: node.Longitud }
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

            <Popup>Nodo {node.NumNodo}, lat:{node.Latitud}, long:{node.Longitud}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default NodeMap;
