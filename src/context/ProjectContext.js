import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);

    const addProject = (projectName) => {
        setProjects((prevProjects) => [...prevProjects, { name: projectName, tasks: [] }]);
    };

    const addTask = (projectId, task) => {
        setProjects((prevProjects) =>
            prevProjects.map((project, index) =>
                index === projectId ? { ...project, tasks: [...project.tasks, task] } : project
            )
        );
    };

    const deleteTask = (projectId, taskIndex) => {
        setProjects((prevProjects) =>
            prevProjects.map((project, index) =>
                index === projectId ? { ...project, tasks: project.tasks.filter((_, i) => i !== taskIndex) } : project
            )
        );
    };

    const deleteProject = (projectId) => {
        setProjects((prevProjects) => prevProjects.filter((_, index) => index !== projectId));
    };

    return (
        <ProjectContext.Provider value={{ projects, addProject, addTask, deleteTask, deleteProject }}>
            {children}
        </ProjectContext.Provider>
    );
};

export default ProjectProvider;
