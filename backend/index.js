const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");
const app = express();
const cors = require("cors");
const port = 5000;
const {handleGetRedirectedUrl} = require('./controllers/url')
const URL = require("./model/url");

connectToMongoDB("mongodb://127.0.0.1:27017/urlShortner").then(() => {
  console.log("Mongodb Connected");
});
app.use(express.json());
app.use(cors()); // Enable CORS for all routes
app.get("/", async(req, res) => {
  const urls = await URL.find().exec();

  return res.json(urls);
});
app.use("/url", urlRoute);
app.get("/:shortId", handleGetRedirectedUrl);
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
