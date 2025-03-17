import React from 'react';

const Tips = ({ tips }) => {
    if (!tips) return null;

    return (
        <div className="tips-container">
            <h2>Construction Tips</h2>
            <p>{tips}</p>
        </div>
    );
};

export default Tips;
