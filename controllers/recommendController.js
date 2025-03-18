const axios = require('axios');

exports.getRecommendation = async (req, res) => {
    const { budget, environment } = req.body;

    try {
        // Send data to Flask/FastAPI endpoint for prediction
        const response = await axios.post('http://localhost:5000/predict', {
            budget,
            environment
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching prediction:', error);
        res.status(500).json({ error: 'Failed to fetch material recommendation.' });
    }
};
