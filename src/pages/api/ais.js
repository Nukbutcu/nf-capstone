import axios from "axios";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
	console.log(req.query);
	

	const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URI}/${req.query.q}`);

	res.status(200).json(data);
}
