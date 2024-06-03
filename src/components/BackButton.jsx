import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();
    return (
        <button id="backButton" onClick={() => navigate('/')}>
            Back to Projects
        </button>
    );
};

export default BackButton;
