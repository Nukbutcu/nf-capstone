import Head from "next/head";
import React, { useState } from "react";
import Layout from "../../organisms/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import dynamic from "next/dynamic";
import Shipicon from "../../atoms/icon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Description = () => {
	const { reload, query } = useRouter();
	const { mmsi, name } = query;
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
	console.log(name);
	return (
		<Layout>
			<Head>
				<title key="title">{name} || description</title>
				<meta key="description" name="description" content="" />
			</Head>
			<Typography variant="h2" component="h1">
				{name}
				<Shipicon />
			</Typography>
			<Card>
				<List>
					<ListItem>Latitude: {data && data.latitude}</ListItem>
					<ListItem>Longitude: {data && data.longitude}</ListItem>
					<ListItem>Speed: {data && data.speed}</ListItem>
					<ListItem>TimeStamp: {data && data.timestamp}</ListItem>
					<ListItem>Status from: {data && unixTime}</ListItem>

					<Button
						onClick={() => {
							reload();
						}}
					>
						Refresh
					</Button>

					<Link href={`/missions/${mmsi}`} style={{ textDecoration: "none" }}>
						<Button> Show Missions </Button>
					</Link>
				</List>
				<MyMap />
			</Card>
		</Layout>
	);
};

export default Description;
