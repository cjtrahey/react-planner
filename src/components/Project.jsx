import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectContext } from '../context/ProjectContext';
import BackButton from './BackButton';

const Project = () => {
    const { id } = useParams();
    const { projects, addTask, deleteTask } = useContext(ProjectContext);
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        if (taskText.trim() === '') return;
        addTask(parseInt(id), taskText);
        setTaskText('');
    };

    return (
        <div className="container">
            <BackButton />
            <h1>Project {projects[id]?.name}</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Enter a new task"
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <ul>
                {projects[id]?.tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task}</span>
                        <button onClick={() => deleteTask(parseInt(id), index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Project;
