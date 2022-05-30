import axios from "axios";

export default async function aipToken1(req: any, res: any) {
    const { token1, token2 } = req.query;
    const data = await axios
        .get(`https://ftx.com/api/markets/${token1}/${token2}`)
    .catch((err) => console.log(err));
    res.status(200).json(data.data);
}