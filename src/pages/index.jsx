import Head from "next/head";
import React, { useState } from "react";
import Button from "../atoms/button";
import Layout from "../organisms/layout";
import JsonData from "../../mmsi.json";
import Link from "next/link";

const Page = () => {
	/* eslint-disable no-unused-vars */
	const [jsonData, setjsonData] = useState(JsonData.Ships);
	/* eslint-enable no-unused-vars */
	return (
		<Layout>
			<Head>
				<title key="title">Missions</title>
				<meta key="description" name="description" content="Status Overview Of The Ships" />
			</Head>

			<h1>Missions</h1>

			{jsonData.map((item, index) => (
				<Link
					key={index}
					href={{
						pathname: "/about/[mmsi]",
						query: { mmsi: item.MSNI, name: item.Name },
					}}
					passHref
				>
					<Button key={index}>{item.Name}</Button>
				</Link>
			))}
		</Layout>
	);
};

export default Page;
