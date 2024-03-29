require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(cors());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err.message);
  
    process.exit(1);
  }
};

connectDB();


app.use(express.json());


const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true, match: [/^\d{10}$/, 'Please enter a valid mobile number'] }
});


const User = mongoose.model('User', UserSchema);


app.post('/signin', async (req, res) => {
  try {
    const { name, mobile } = req.body;
    const newUser = new User({ name, mobile });
    await newUser.save();
    res.json({ message: 'User saved' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
