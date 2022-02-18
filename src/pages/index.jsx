import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";
import Link from "next/link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import useGet from "../ions/hooks/fetch/get";
import Shipicon from "../atoms/icon";
import { Box } from "@mui/system";

const Page = () => {
	/* eslint-disable no-unused-vars */
	const { data } = useGet("/mmsi.json");
	/* eslint-enable no-unused-vars */
	const ships = [
		{
			mmsi: "211281610",
			name: "Sea-Watch 3",
		},
		{
			mmsi: "211300760",
			name: "Sea-Watch 4",
		},
	];

	return (
		<Layout>
			<Head>
				<title key="title">Missions</title>
				<meta key="description" name="description" content="Status Overview Of The Ships" />
			</Head>

			<Typography variant="h2" component="h1">
				<Shipicon />
				Missions
			</Typography>

			{ships.map(item => (
				<div key={item.mmsi}>
					<Link href={`/about/${item.mmsi}`} passHref>
						<Box pt={3} mt={3}>
							<Button fullWidth="true">
								<LocationSearchingIcon />{" "}
								<Typography variant="h3" component="h2">
									{item.name}
								</Typography>
							</Button>
						</Box>
					</Link>
				</div>
			))}
		</Layout>
	);
};

export default Page;
