const express = require("express");
const connectDB = require("./config/db");
const articleRouter = require("./routes/posts");
const Post = require("./models/post");
const methodOverride = require("method-override");
const app = express();

connectDB().then(() =>
  app.listen(5000, () => console.log("Server running at port 5000"))
);

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: "desc" });
  res.render("posts/index", { posts });
});

app.use("/posts", articleRouter);
