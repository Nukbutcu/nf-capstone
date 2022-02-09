import Head from "next/head";
import React, { useState } from "react";
import Button from "../atoms/button";
import Layout from "../organisms/layout";
import JsonData from "../../mmsi.json";
import Link from "next/link";

const Page = () => {
	const [jsonData, setjsonData] = useState(JsonData.Ships);

	return (
		<Layout>
			<Head>
				<title key="title">Missions</title>
				<meta key="description" name="description" content="Status Overview Of The Ships" />
			</Head>

			<h1>Missions</h1>
			{jsonData.map((item, index) => (
				<Link
					href={{
						pathname: "/about/[mmsi]",
						query: { mmsi: item.MSNI, name: item.Name },
					}}
					key={index}
				>
					<Button key={index}>{item.Name}</Button>
				</Link>
			))}
		</Layout>
	);
};

export default Page;
