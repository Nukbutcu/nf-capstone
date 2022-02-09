import Head from "next/head";
import React, { useState } from "react";
import Layout from "../../organisms/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../../atoms/button";
import axios from "axios";

const Description = () => {
	const router = useRouter();
	const { mmsi } = router.query;
	const { name } = router.query;
	const [data, setData] = useState();
	const [unixTime, setunixTime] = useState();

	useEffect(async () => {
		const { data } = await axios.get(
			`https://still-garden-02526.herokuapp.com/getLastPosition/${mmsi}`
		);
		const extractedData = data.data;
		setData(extractedData);
		if (extractedData) {
			var dateObj = new Date(extractedData.unixtime).toLocaleDateString("en-US");
			var dateObj =
				dateObj + " " + new Date(extractedData.unixtime).toLocaleTimeString("en-US");
			setunixTime(dateObj);
		}
	}, []);

	return (
		<Layout>
			<Head>
				<title key="title">{name} || description</title>
				<meta key="description" name="description" content="" />
			</Head>
			<h1>{name}</h1>
			<p>Latitude : {data && data.latitude}</p>
			<p>Longitude : {data && data.longitude}</p>
			<p>Speed : {data && data.speed}</p>
			<p>TimeStamp: {data && data.timestamp}</p>
			<p>UnixTime: {data && unixTime}</p>
			<Button>Update</Button>
		</Layout>
	);
};

export default Description;
