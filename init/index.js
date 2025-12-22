//To initialize database for the first time

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  //Initializing data again with the field owner
  initData.data = initData.data.map((obj) => ({ ...obj, owner:"694819fc621e5748a4e410d4" }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();