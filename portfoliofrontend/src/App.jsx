// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// src/App.jsx
import React, { useState, useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import Navbar from './components/Navbar';

const App = () => {
  const [projects, setProjects] = useState([]);
  let youtubelink = 'https://youtu.be/emPohstWs-w';
  youtubelink = youtubelink.replace('youtu.be', 'youtube.com/embed');
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/portfolio/projects/') // Update to match your backend API URL
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    
    <div className="container mx-auto p-8">
      <Navbar />
      <h1 className="text-6xl font-bold mb-6">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <iframe className='p-10 w-full h-screen'
        src={youtubelink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default App;
