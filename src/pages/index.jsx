import Head from "next/head";
import React, { useState } from "react";
import useGet from "../ions/hooks/fetch/get";
import Layout from "../organisms/layout";

const endpoints = {
	lastPosition: "getLastPosition/211281610",
	lastPositionFrom: "getLastPositionFromVF/211281610",
};

const Page = () => {
	const [url, setUrl] = useState(endpoints.lastPosition);
	const { data, loading, error } = useGet(`/api/ais?q=${url}`);

	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<h1>Missions</h1>

			{loading && <div>Loading...</div>}
			{error && <div>{error.message}</div>}
			{data && (
				<pre>
					<code>{JSON.stringify(data, null, 4)}</code>
				</pre>
			)}
		</Layout>
	);
};

export default Page;
