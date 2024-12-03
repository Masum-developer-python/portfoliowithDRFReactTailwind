import React from 'react';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl text-gray-600 mb-8">
        I'm a passionate developer creating innovative web solutions.
      </p>
      <div className="flex justify-center space-x-4">
        <a 
          href="/resume.pdf" 
          target="_blank" 
          className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Download CV
        </a>
        <a 
          href="/contact" 
          className="border border-primary text-primary px-6 py-2 rounded hover:bg-blue-50"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Home;