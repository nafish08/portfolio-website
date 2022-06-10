import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='flex justify-center'>
            <div className='' id='projects'>
                <h2 className='text-5xl uppercase font-bold text-center py-6'>My Projects</h2>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 my-5">
                    {
                        projects.map(project => <Project
                            key={project.id}
                            project={project}
                        ></Project>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;