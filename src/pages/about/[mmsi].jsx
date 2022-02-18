import Head from "next/head";
import React, { useState } from "react";
import Layout from "../../organisms/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import Link from "next/link";
import dynamic from "next/dynamic";

const Description = () => {
	const { reload, query } = useRouter();
	const { mmsi } = query;
	const { name } = query;
	const [data, setData] = useState();
	const [unixTime, setunixTime] = useState();

	const NoSsrMap = dynamic(() => import("../../atoms/map/index"), { ssr: false });

	useEffect(async () => {
		const { data } = await axios.get(`http://localhost:5000/getLastPosition/${mmsi}`);
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

	const MyMap = () => {
		return (
			<div>
				<NoSsrMap data={data} />
			</div>
		);
	};

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
					<ul>
						<li>Latitude : {data && data.latitude}</li>
						<li>Longitude : {data && data.longitude}</li>
						<li>Speed : {data && data.speed}</li>
						<li>TimeStamp: {data && data.timestamp}</li>
						<li>Status from: {data && unixTime}</li>
					</ul>
					<Button
						onClick={() => {
							reload();
						}}
					>
						Refresh
					</Button>
					<Link href={`/missions/${mmsi}`}>Show Missions</Link>
				</CardContent>
				<MyMap />
			</Card>
		</Layout>
	);
};

export default Description;
