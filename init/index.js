const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
require("dotenv").config({ path: "../.env" });


main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

const initDB =  async() => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({...obj, owner: "652d0081ae547c5d37e56b5f"}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();



