const express = require("express");
const { connectToMongoDB } = require("./connect");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { handleGetRedirectedUrl } = require("./controllers/url");
const URL = require("./model/url");

const urlRoute = require("./routes/url");
const userRoute = require("./routes/user");

dotenv.config();
connectToMongoDB(process.env.URL
).then(() => {
  console.log("Mongodb Connected");
});
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.use("/url", urlRoute);
app.use("/user", userRoute);
app.get("/", async (req, res) => {
  const urls = await URL.find().exec();

  return res.json(urls);
});
app.get("/:shortId", handleGetRedirectedUrl);
app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
