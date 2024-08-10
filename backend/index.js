const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const journalRoutes = require('./routes/journalRoutes');
const contactusRoutes = require('./routes/contactusRoutes');

dotenv.config({ path: './.env' });

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000; // Fallback to port 5000 if not defined

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('DB connected');
  } catch (err) {
    console.log(err.message);
  }
};

// Connect to the database
connect();

app.get('/', (req, res) => {
  res.status(200).json('Hello world');
});

app.use('/uploads', express.static('uploads'));
app.use('/users', userRoutes);
app.use('/journal', journalRoutes);
app.use('/api/contactus', contactusRoutes);
