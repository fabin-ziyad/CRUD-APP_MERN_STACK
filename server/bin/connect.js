const { connect, connection } = require("mongoose");

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    connection.on('error', (error) => {
      console.error('MongoDB connection error:', error);
    });
    
    connection.once('open', () => {
      console.log('Connected to MongoDB!');
    });

    process.on('SIGINT', () => {
      connection.close(() => {
        console.log('MongoDB connection closed.');
        process.exit(0);
      });
    });
  } catch (error) {
    console.log(error);
    process.exit(1); 
  }
};

module.exports = connectDB;
