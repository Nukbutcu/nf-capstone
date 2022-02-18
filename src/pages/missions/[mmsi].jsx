import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import useGet from "../../ions/hooks/fetch/get";
// import { ListItemText } from "@mui/material";
import Shipicon from "../../atoms/icon";

const Description = () => {
	const { query } = useRouter();
	const { mmsi } = query;
	const { name } = query;
	const { data: ship } = useGet(`/ships/${mmsi}.json`);

	return (
		<Layout>
			<Head>
				<title key="title">{name} || description</title>
				<meta key="description" name="description" content="" />
			</Head>
			<Typography variant="h2" component="h1">
				<Shipicon /> {name}
			</Typography>
			<Card>
				{ship?.missions.map(item => {
					return (
						<List key={item.id}>
							<ListItem> Mission:{item.mission}</ListItem>
							<ListItem> Start: {item.start}</ListItem>
							<ListItem> End: {item.end}</ListItem>
							<ListItem>Next Destination: {item.nextDestination}</ListItem>
						</List>
					);
				})}
			</Card>
		</Layout>
	);
};

export default Description;
