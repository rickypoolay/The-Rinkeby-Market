// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function getAllNFTs(req, res) {
  res.status(200).json({ hello: "John Doe", method: req.method });
}
