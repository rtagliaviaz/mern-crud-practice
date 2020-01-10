const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI 
  ? process.env.MONGODB_URI 
  : 'mongodb://localhost/dbtest';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const connection = mongoose.connection;

connection.openUri('open', () => {
  console.log('DB is connected');
});