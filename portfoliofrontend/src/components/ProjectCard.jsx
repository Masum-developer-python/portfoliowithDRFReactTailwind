// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => (
  <div className="p-4 border rounded shadow-lg">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-40 object-cover rounded"
    />
    <h3 className="text-xl font-bold mt-2">{project.title}</h3>
    <p className="text-gray-600">{project.description}</p>
    <div className="mt-2">
      <a
        href={project.github_url}
        className="text-blue-500 hover:underline mr-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      {project.live_demo_url && (
        <a
          href={project.live_demo_url}
          className="text-green-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
