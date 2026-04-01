const express = require("express");
const app = express();
const port = 3000;

const hbs = require("express-handlebars");

app.engine("handlebars", hbs.engine());
app.set("view engine", "handlebars");

const path = require("path");
const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
  slug: String,
  name: String,
  description: String,
});

const gallerySchema = new mongoose.Schema({
  name: String,
  description: String,
});

const imageSchema = new mongoose.Schema({
  url: String,
  caption: String,
  gallery: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "galleries",
  },
});

const destinationSchema = new mongoose.Schema(
  {
    page: String,
    name: String,
    description: String,
    image: String,
  },
  {
    virtuals: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

destinationSchema.virtual("activities", {
  ref: "activities",
  localField: "_id",
  foreignField: "destination",
});

gallerySchema.virtual("images", {
  ref: "images",
  localField: "_id",
  foreignField: "gallery",
});

const activitySchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  cost: Number,
  destination: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "destinations",
  },
});

const Destination = mongoose.model("destinations", destinationSchema);
const Activity = mongoose.model("activities", activitySchema);
const Page = mongoose.model("pages", pageSchema);
const Gallery = mongoose.model("galleries", gallerySchema);
const Image = mongoose.model("images", imageSchema);

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/travelsite");
}
main().catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "static")));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const homePage = await Page.findOne({ slug: "home" }).lean();

  const gallery = await Gallery.findOne({ name: "Homepage Gallery" })
    .populate("images")
    .lean();

  const destinations = await Destination.find().lean();

  res.render("home", {
    title: homePage.name,
    description: homePage.description,
    galleryImages: gallery.images,
    destinations: destinations,
  });
});

app.post("/destinations", async (req, res) => {
  const { page, name, description, image } = req.body;
  console.log(req.body);

  const newDestination = new Destination({
    page,
    name,
    description,
    image,
  });

  await newDestination.save();
  res.send("Destination added successfully");
});

app.get("/destinations", async (req, res) => {
  const destinations = await Destination.find().lean();

  res.render("destinations", {
    destinations: destinations,
    title: "Destinations",
  });
});

app.get("/destinations/:id", async (req, res) => {
  const { id } = req.params;
  const destination = await Destination.findById(id)
    .populate("activities")
    .lean();

  res.render("details", {
    destination: destination,
    title: destination.name,
    activities: destination.activities,
  });
});

app.post("/activities", async (req, res) => {
  const { name, description, image, cost, destination } = req.body;

  const newActivity = new Activity({
    name,
    description,
    image,
    cost,
    destination,
  });

  await newActivity.save();
  res.send("Activity added successfully");
});

app.post("/pages", async (req, res) => {
  const { slug, name, description } = req.body;

  const newPage = new Page({
    slug,
    name,
    description,
  });

  await newPage.save();
  res.send("Page added successfully");
});

app.post("/galleries", async (req, res) => {
  const { name, description } = req.body;

  const newGallery = new Gallery({
    name,
    description,
  });

  await newGallery.save();
  res.send("Gallery added successfully");
});

app.post("/images", async (req, res) => {
  const { url, caption, gallery } = req.body;

  const newImage = new Image({
    url,
    caption,
    gallery,
  });

  await newImage.save();
  res.send("Image added successfully");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});