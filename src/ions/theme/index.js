import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		h2: {
			fontFamily: "sans-serif",
			fontWeight: "100",
			fontSize: "3.5em",
			letterSpacing: "0.06em",
			color: "#023e8a",
		},
		h3: {
			fontFamily: "sans-serif",
			fontWeight: "100",
			fontSize: "2.2em",
			letterSpacing: "0.06em",
			color: "#023e8a",
		},
	},
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					backgroundColor: "white",
					color: "#023e8a",
				},
			},
		},
		MuiButton: {
			defaultProps: {
				variant: "contained",
				disableRipple: true,
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					borderBlockColor: "white",
					backgroundColor: "white",
					color: "#023e8a",
					padding: "15px 15px",
					"&:hover": {
						backgroundColor: "#bae9ff",
					},
				},
			},
		},
	},
});

export default theme;
