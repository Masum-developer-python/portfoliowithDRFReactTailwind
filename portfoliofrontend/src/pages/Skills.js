import React, { useState, useEffect } from 'react';
import { fetchSkills } from '../api';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const response = await fetchSkills();
        setSkills(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };
    getSkills();
  }, []);

  const categorizeSkills = (skillList) => {
    return skillList.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {});
  };

  const categorizedSkills = categorizeSkills(skills);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      {Object.entries(categorizedSkills).map(([category, categorySkills]) => (
        <div key={category} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 capitalize">{category} Skills</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {categorySkills.map(skill => (
              <div 
                key={skill.id} 
                className="bg-white shadow-md rounded-lg p-4 text-center"
              >
                <h4 className="font-bold">{skill.name}</h4>
                <div className="h-2 bg-gray-200 rounded-full mt-2">
                  <div 
                    className="h-2 bg-primary rounded-full" 
                    style={{width: `${skill.proficiency * 25}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;