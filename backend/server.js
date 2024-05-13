const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { handleGetRedirectedUrl } = require("./controllers/url");
const URL = require("./model/url");

dotenv.config();
connectToMongoDB(
  "mongodb+srv://poudelsanchit:NoobMaster$96@cluster0.qayskoe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/urlshortner"
).then(() => {
  console.log("Mongodb Connected");
});
app.use(express.json());
app.use(cors()); // Enable CORS for all routes
app.get("/", async (req, res) => {
  const urls = await URL.find().exec();

  return res.json(urls);
});
app.use("/url", urlRoute);
app.get("/:shortId", handleGetRedirectedUrl);
app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
