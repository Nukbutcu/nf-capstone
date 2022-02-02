import axios from "axios";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
	console.log(req.query);
	const { data } = await axios.get(`https://still-garden-02526.herokuapp.com/${req.query.q}`);

	res.status(200).json(data);
}
