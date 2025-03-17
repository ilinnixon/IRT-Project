import React, { useState } from 'react';
import Home from './components/Home';
import InputForm from './components/InputForm';
import Results from './components/Results';
import Tips from './components/Tips';
import './index.css'; // For CSS


import './styles/App.css';

function App() {
    const [results, setResults] = useState(null);
    const [tips, setTips] = useState('');

    return (
        <div className="app-container">
            <Home />
            <InputForm onResults={setResults} />
            <Results results={results} />
            <Tips tips={tips} />
        </div>
    );
}

export default App;
