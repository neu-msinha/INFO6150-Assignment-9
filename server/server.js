const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const companyRoutes = require('./routes/companyRoutes');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))// parse url-encoded bodies(from data)
app.use(express.json())// parse JSON requests

app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes
app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.use('/company', companyRoutes);
app.use('/static', express.static('public'))
app.use('/files', express.static('images'))
app.use('/company_images', express.static('images'))

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      status: 'error',
      message: 'File upload error: ' + err.message
    });
  }
  res.status(500).json({
    status: 'error',
    message: err.message
  });
});

// Connect to MongoDB and start server
mongoose.connect('mongodb://localhost:27017/user-api')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });