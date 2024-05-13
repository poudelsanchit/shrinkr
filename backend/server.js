const express = require("express");
const path = require("path");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { handleGetRedirectedUrl } = require("./controllers/url");
const URL = require("./model/url");
const staticRoute = require("./routes/staticrouter");

dotenv.config();
connectToMongoDB(process.env.URL).then(() => {
  console.log("Mongodb Connected");
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // Enable CORS for all routes

app.use("/url", urlRoute);
app.use("/", staticRoute);

app.get("/:shortId", handleGetRedirectedUrl);
app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
