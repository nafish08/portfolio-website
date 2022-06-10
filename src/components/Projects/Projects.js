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
        <div class="grid grid-cols-3 gap-4 my-5">
            {
                projects.map(project => <Project
                    key={project.id}
                    project={project}
                ></Project>)
            }
        </div>
    );
};

export default Projects;