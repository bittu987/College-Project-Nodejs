require("dotenv").config();
const mongoose = require("mongoose");


const mongoURI ='mongodb+srv://bonelessfish16:48mRNydgIDZKAxCh@cluster0.zf8uh.mongodb.net/collage?retryWrites=true&w=majority';


const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
      serverSelectionTimeoutMS: 30000, 
    });
    console.log("Connected to MongoDB Successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectToMongo;
