import React from 'react';

const Results = ({ results }) => {
    if (!results) return null;

    return (
        <div className="results-container">
            <h2>Recommended Materials</h2>
            <ul>
                {results.map((material, index) => (
                    <li key={index}>
                        <strong>{material.name}</strong> - {material.properties}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Results;
