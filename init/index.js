const mongoose = require("mongoose");
const initData = require("./data");
const Lisiting = require("../models/lisiting");
const Listing = require("../models/lisiting");

main().then(()=>{
    console.log("Connected to Database...");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/arbnb');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const initDB = async ()=>{
    await Lisiting.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Completed");
}

initDB(); 