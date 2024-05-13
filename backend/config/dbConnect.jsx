import mongoose from 'mongoose';
import colors from 'colors';

const dbConnect = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${con.connection.host}`.bgCyan.white);
  } catch (err) {
    console.log(`Error connecting Database: ${err.message}`.bgRed.white);
  }
};

export default dbConnect;
