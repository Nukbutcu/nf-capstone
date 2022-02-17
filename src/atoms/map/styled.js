import styled from "@emotion/styled";
import { MapContainer } from "react-leaflet";

const StyledMapContainer = styled(MapContainer)`
	position: relative;
	width: 100%;
	height: calc(50vh - 56px);
	margin: 100;
	padding: 100;
`;

export default StyledMapContainer;
