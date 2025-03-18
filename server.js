const express = require('express');
const cors = require('cors');

const recommendRoute = require('./routes/recommendRoute');

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/recommend', recommendRoute);

// Server listening
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
