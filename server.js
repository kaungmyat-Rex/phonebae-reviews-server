const express = require("express");
const app = express();

const port = 8000;
require("./connection/connect");
require("dotenv").config();
const Post = require("./models/model");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
app.use(cors());
// app.use("/Images", express.static(path.join(__dirname, "Images")));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/getreviews", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "Images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });
// upload.single("image"),
app.post("/upload", async (req, res) => {
  console.log(req.file);
  const post = new Post({
    name: req.body.name,
    rating: req.body.rating,
    tips: req.body.tips,
    info: req.body.info,
    price: req.body.price,
    author: req.body.author,
    goodstuff: req.body.goodstuff,
    badstuff: req.body.badstuff,
    img: req.file.filename,
  });

  await post.save().then((data) => {
    res.json(data);
  });
});

app.delete("/api/upload/:id", async (req, res) => {
  const postID = req.params.id;
  const postdelete = await Post.findByIdAndDelete(postID);
  res.send(postdelete);
});

app.patch("/api/upload/:id", async (req, res) => {
  const postID = req.params.id;
  const postUpdate = await Post.findByIdAndUpdate(postID, {
    name: req.body.name,
    rating: req.body.rating,
    tips: req.body.tips,
    info: req.body.info,
    price: req.body.price,
    author: req.body.author,
    goodstuff: req.body.goodstuff,
    badstuff: req.body.badstuff,
  });
  res.send(postUpdate);
});

app.get("/api/upload/:id", async (req, res) => {
  const postID = req.params.id;
  const task = await Post.findById(postID);

  res.json(task);
});

app.listen(process.env.PORT || port, () => {
  console.log(`server is listening on port ${port}`);
});
