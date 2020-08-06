const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// const postRoutes = require('./routes/posts');
// const userRoutes = require('./routes/user');
const auth = require('./routes/auth');

const mongoURLString = 'mongodb://127.0.0.1:27017/factory';
mongoose.connect(mongoURLString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(5000, () => console.log("Database Connection successful!!"))
  })
  .catch(() => {
    console.log('Database Connection did not happen');
  });
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});

app.use('/api/auth', auth);
// app.use('/api/user', userRoutes);

module.exports = app;