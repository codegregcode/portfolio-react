import React, { useEffect, useState } from 'react';
import db from '../firebase';

import '../styles/portfolio.css';

const getProjects = async () => {
  const querySnapshot = await db.collection('projects').get();

  const projects = [];
  querySnapshot.forEach((doc) => {
    const project = doc.data();
    projects.push(project);
  });

  return projects;
};

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Portfolio</h1>
      {projects.map((project) => (
        <div key={project.title} className="project-container">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img src={project.image_link} alt={project.title} />
          <a href={project.github_link} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={project.deploy_link} target="_blank" rel="noreferrer">
            Link 2 Deploy
          </a>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
