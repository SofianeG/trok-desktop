const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://' +
      process.env.DB_USER_PASS +
      '@cluster0.ubfwt.mongodb.net/trokeo-desk?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
  )
  .then(() => console.log('connected to mongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));
