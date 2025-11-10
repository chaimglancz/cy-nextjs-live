export default function cy(req, res) {
  const { cyName } = req.query;
  const cyResponse = cyName || 'no query';
  
  res.status(200).json({ cyGreeting: cyResponse });
}