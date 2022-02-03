import Head from "next/head";
import React, { useState } from "react";
import Button from "../atoms/button";
import useGet from "../ions/hooks/fetch/get";
import Layout from "../organisms/layout";

const endpoints = {
	lastPositionSeaWatch3: "getLastPosition/211281610",
	lastPositionSeaWatch4: "getLastPosition/211300760",
};

const Page = () => {
	const [url, setUrl] = useState(endpoints.lastPosition);
	const { data, loading, error } = useGet(`/api/ais?q=${url}`);

	console.log(data);

	return (
		<Layout>
			<Head>
				<title key="title">Sea-Watch</title>
				<meta key="description" name="description" content="Status Overview Of The Ships" />
			</Head>
			<h1>Missions</h1>
			<Button
				onClick={() => {
					setUrl(endpoints.lastPositionSeaWatch3);
				}}
			>
				Sea-Watch 3
			</Button>
			<Button
				onClick={() => {
					setUrl(endpoints.lastPositionSeaWatch4);
				}}
			>
				Sea-Watch 4
			</Button>
			{loading && <div>Loading...</div>}
			{error && <div>{error.message}</div>}
			{data && (
				<pre>
					<code>{JSON.stringify(data, null, 2)}</code>
				</pre>
			)}
			)
		</Layout>
	);
};

export default Page;
