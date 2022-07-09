export default (req, res) => {
  console.log(req);
  res.setHeader("Cache-control", "s-maxage=6000, stale-while-revalidate=30");
  res.setHeader("Content-type", "text/plain");
  res.status(200).end("example from Nextjs !!");
};
