import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'; // Ensure this import is present
import App from './App';
import ProjectProvider from './context/ProjectContext';

ReactDOM.render(
  <React.StrictMode>
    <ProjectProvider>
      <App />
    </ProjectProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
