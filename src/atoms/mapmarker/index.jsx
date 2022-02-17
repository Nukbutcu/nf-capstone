import React from "react";
import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import leaflet from "leaflet";

const MarkerIcon = leaflet.divIcon({
	html: `
         <svg
           width="25"
           height="25"
           viewBox="0 0 100 100"
         >
         <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 504 504" style="enable-background:new 0 0 504 504;" xml:space="preserve">
    <circle style="fill:#FFD05B;" cx="252" cy="252" r="252"/>
    <path style="fill:#4CDBC4;" d="M329.7,128.9H174.3c-7.7,0-14,6.3-14,14v112.5h183.4V142.9C343.7,135.2,337.5,128.9,329.7,128.9z"/>
    <rect x="227.7" y="285.7" style="fill:#324A5E;" width="31.5" height="50.6"/>
    <rect x="227.7" y="285.7" style="fill:#FFFFFF;" width="31.5" height="13.9"/>
    <g>
        <circle style="fill:#324A5E;" cx="307" cy="161.1" r="12"/>
        <circle style="fill:#324A5E;" cx="197" cy="161.1" r="12"/>
        <rect x="231.4" y="63.3" style="fill:#324A5E;" width="41.2" height="65.7"/>
    </g>
    <rect x="231.4" y="63.3" style="fill:#FFFFFF;" width="41.2" height="16.7"/>
    <polygon style="fill:#FF7058;" points="251,160.3 134.3,252.4 171.9,385.3 252,385.3 252,161.1 "/>
    <polygon style="fill:#F1543F;" points="369.7,252.4 252,161.1 252,385.3 332.1,385.3 "/>
    <path style="fill:#84DBFF;" d="M341.2,358.4c-12.8,0-24.2,8.6-29.8,21.8c-5.6-13.3-17-21.8-29.8-21.8s-24.2,8.6-29.8,21.8
        c-5.6-13.3-17-21.8-29.8-21.8c-12.6,0-24,8.5-29.6,21.5c-5.6-13.1-17-21.5-29.6-21.5c-18.4,0-33.3,17.7-33.3,39.5
        c0,4.3,0.6,8.6,1.8,12.7l1.8,6.4l1.8-6.4c4.1-14.4,15.3-24.1,27.9-24.1c12.2,0,22.9,8.9,27.4,22.6l0.1,0.5c0.1,0.3,0.2,0.7,0.3,1
        l1.9,6.5l1.9-6.5c0.1-0.3,0.2-0.7,0.3-1l0.1-0.3c4.5-13.8,15.2-22.7,27.4-22.7c12.5,0,23.7,9.7,27.9,24.1l2,6.4l1.8-6.4
        c4.1-14.4,15.3-24.1,27.9-24.1c12.5,0,23.7,9.7,27.9,24.1l2,6.4l1.8-6.4c4.1-14.4,15.3-24.1,27.9-24.1c12.5,0,23.7,9.7,27.9,24.1
        l1.8,6.4l1.8-6.4c1.2-4.2,1.8-8.4,1.8-12.7C374.5,376.1,359.5,358.4,341.2,358.4z"/>
         </svg>`,
	className: "",
	iconSize: [100, 100],
	iconAnchor: [15, 40],
});

export default MarkerIcon;
