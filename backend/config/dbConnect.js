import mongoose from 'mongoose';
import colors from 'colors';

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Server running on ${mongoose.connection.host}`.bgBlue.white);
  } catch (err) {
    console.error(`Error: ${err.message}`.bgRed);
  }
};

export default dbConnect;
