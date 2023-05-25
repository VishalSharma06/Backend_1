const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    })

    .then(() => {
      console.log("Connrection is Sucessful");
    })
    .catch((error) => {
      console.log("Recieved an Error");
      console.error(error);
      process.exit(1);
    });
};

module.exports = dbConnect;
