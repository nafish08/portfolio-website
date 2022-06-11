import React from 'react';
import useProjects from '../../hooks/useProjects';
import Project from '../Project/Project';

const ProjectDetails = () => {
    const [projects, setProjects] = useProjects();
    return (
        <div className='flex justify-center'>
            <div className='' id='projects'>
                <h2 className='text-5xl uppercase font-bold text-center py-6'>My Projects</h2>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 my-5">
                    {
                        projects.map(project => <Project
                            key={project.id}
                            project={project}
                        >
                            <p className='text-black'>{project.description}</p>
                            <h2 className='font-bold text-black'>Technology Used:</h2>
                            <div className='flex justify-center'>
                                <p className='text-sm text-primary'>{project.tech}</p>
                            </div>
                        </Project>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;