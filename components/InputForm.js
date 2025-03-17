import React, { useState } from 'react';
import axios from 'axios';

const InputForm = ({ onResults }) => {
    const [budget, setBudget] = useState('');
    const [environment, setEnvironment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const inputData = { budget, environment };
        try {
            const response = await axios.post('/recommend', inputData);
            onResults(response.data);
        } catch (error) {
            console.error('Error fetching recommendations:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Enter Project Details</h2>
            <form onSubmit={handleSubmit}>
                <label>Budget (USD):</label>
                <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    required
                />

                <label>Environment Type:</label>
                <select value={environment} onChange={(e) => setEnvironment(e.target.value)}>
                    <option value="">Select Environment</option>
                    <option value="coastal">Coastal</option>
                    <option value="arid">Arid</option>
                    <option value="cold">Cold Climate</option>
                </select>

                <button type="submit">Get Recommendations</button>
            </form>
        </div>
    );
};

export default InputForm;
