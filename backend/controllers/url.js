const shortid = require("shortid");
const URL = require("../model/url");

const handleGenerateNewShortUrl = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(404).json({ err: "URL is required" });
  const shortId = shortid.generate(); // Corrected function call
  const shortUrl = `${req.protocol}://${req.get("host")}/${shortId}`;


  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitedHistory: [],
  });

  return res.json({ shortUrl: shortUrl });
};
const handleGetRedirectedUrl = async (req, res) => {
  const shortId = req.params.shortId;
  try {
    const urlDocument = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: {timestamp: Date.now() }} }
    );
    res.redirect(urlDocument.redirectUrl)
  } catch (error) {
    console.error("Error fetching URL:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { handleGenerateNewShortUrl, handleGetRedirectedUrl };
