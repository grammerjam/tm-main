import mongoose from "mongoose";
import fs from "fs";

let dbCertificateObject = {
  importFile: fs.readFileSync("./global-bundle.pem"),
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_CONNECT, {
      ssl: true,
      sslValidate: false,
      sslCA: dbCertificateObject.importFile,
      tlsCAFile: `global-bundle.pem`,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
