import React from "react";
import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import StyledMapContainer from "./styled.js";
import { Marker, Popup } from "react-leaflet";
import MarkerIcon from "../mapmarker/index.jsx";
import Icon from "../icon/index.jsx";

const Map = ({ data }) => {
	let position = [39.513882, 0.619564];
	if (data?.latitude && data?.longitude) {
		const lat = parseFloat(data.latitude);
		const lng = parseFloat(data.longitude);
		if (Number.isFinite(lat) && Number.isFinite(lng)) {
			position = [lat, lng];
		}
	}

	return (
		<StyledMapContainer
			watch
			enableHighAccuracy
			zoomControl
			center={position}
			zoom={[15]}
			scrollWheelZoom={true}
		>
			<TileLayer
				url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGF1bHBhdWwxMjM0NSIsImEiOiJja3poMDE0aDMzOGgwMnJuOTgwcjZhMWNoIn0.1pYURF9UykgW3o_4CQZEqg"
				zoomControl={true}
			/>
			<Marker position={position} icon={MarkerIcon}>
				<Popup>The Ship is here!</Popup>
			</Marker>
		</StyledMapContainer>
	);
};

export default Map;
