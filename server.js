const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes/index");

const PORT = process.env.PORT || 8080;
const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/score", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(express.static("build", { extensions: ["html"] }));
app.use(express.json());
app.use(morgan("tiny"));
app.use(routes);

app.listen(PORT, () => console.log(`🚀 Listening on PORT ${PORT}`));