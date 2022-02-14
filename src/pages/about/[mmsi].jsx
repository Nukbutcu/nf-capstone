import Head from "next/head";
import React, { useState } from "react";
import Layout from "../../organisms/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

const Description = () => {
	const router = useRouter();
	const { mmsi } = router.query;
	const { name } = router.query;
	const [data, setData] = useState();
	const [unixTime, setunixTime] = useState();

	const reload = () => {
		router.reload();
	};

	useEffect(async () => {
		const { data } = await axios.get(
			`https://still-garden-02526.herokuapp.com/getLastPosition/${mmsi}`
		);
		const extractedData = data.data;
		setData(extractedData);
		if (extractedData) {
			const unixTimestamp = data.data.unixtime;
			const millisecons = unixTimestamp * 1000;
			const dateObj = new Date(millisecons);
			const humanDateformat = dateObj.toLocaleString();

			setunixTime(humanDateformat);
		}
	}, []);

	return (
		<Layout>
			<Head>
				<title key="title">{name} || description</title>
				<meta key="description" name="description" content="" />
			</Head>
			<Typography variant="h2" component="h1">
				<LocationSearchingIcon />
				{name}
			</Typography>
			<Card>
				<CardContent>
					<Typography paragraph>
						<ul>
							<li>Latitude : {data && data.latitude}</li>
							<li>Longitude : {data && data.longitude}</li>
							<li>Speed : {data && data.speed}</li>
							<li>TimeStamp: {data && data.timestamp}</li>
							<li>UnixTime: {data && unixTime}</li>
						</ul>
						<Button onClick={reload}>Refresh</Button>
					</Typography>
				</CardContent>
			</Card>
		</Layout>
	);
};

export default Description;
