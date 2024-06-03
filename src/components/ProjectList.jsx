import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../context/ProjectContext';

const ProjectList = () => {
    const [projectName, setProjectName] = useState('');
    const { projects, addProject, deleteProject } = useContext(ProjectContext);

    const handleAddProject = () => {
        if (projectName.trim() === '') return;
        addProject(projectName);
        setProjectName('');
    };

    return (
        <div className="container">
            <h1>Projects</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="Enter a new project name"
                />
                <button onClick={handleAddProject}>Add Project</button>
            </div>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <Link to={`/project/${index}`}>{project.name}</Link>
                        <button onClick={() => deleteProject(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
