const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'your_mongodb_connection_string', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Serve static files from the Vue app
app.use(express.static(path.join(__dirname, '../dist')));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
