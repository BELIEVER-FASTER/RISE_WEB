import mongoose from 'mongoose';

const connection = { isConnected: 0 };

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log('디비 연결');
  } catch (e) {
    console.error(e);
  }
}

export default dbConnect;
