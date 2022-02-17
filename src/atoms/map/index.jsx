import React from "react";
import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import StyledMapContainer from "./styled.js";
import { Marker, Popup } from "react-leaflet";
import MarkerIcon from "../mapmarker/index.jsx";

const Map = () => {
	return (
		<StyledMapContainer
			watch
			enableHighAccuracy
			zoomControl
			center={{ lat: 39.86099, lng: -0.06917167 }}
			zoom={[13]}
			scrollWheelZoom={true}
		>
			<TileLayer
				url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGF1bHBhdWwxMjM0NSIsImEiOiJja3poMDE0aDMzOGgwMnJuOTgwcjZhMWNoIn0.1pYURF9UykgW3o_4CQZEqg"
				zoomControl={true}
			/>
			<Marker position={{ lat: 39.86099, lng: -0.06917167 }} icon={MarkerIcon}>
				<Popup>The Ship is here!</Popup>
			</Marker>
		</StyledMapContainer>
	);
};

export default Map;
