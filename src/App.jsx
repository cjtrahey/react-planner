import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import Project from './components/Project';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProjectList />} />
                <Route path="/project/:id" element={<Project />} />
            </Routes>
        </Router>
    );
};

export default App;
