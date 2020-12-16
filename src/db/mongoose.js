import mongoose from 'mongoose';

const connectDB = () =>
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

export default connectDB;
