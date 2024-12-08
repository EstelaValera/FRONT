import React from 'react';
import '../styles/App.css'

const Tooltip = ({ text }) => {
    return (
        <div className="tooltip-container">
            <span className="tooltip-icon">?</span>
            <div className="tooltip-text">
                {text}
            </div>
        </div>
    );
};


export default Tooltip;