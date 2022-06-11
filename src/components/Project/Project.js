import React, { Children } from 'react';

const Project = ({ project, children }) => {
    const { img, name, description, preview, client, server } = project;
    return (
        <div className="card w-96 bg-white shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title p-3 text-base-100 text-center block">{name}</h2>
                {children}
                <div className='flex justify-between'>
                    <a href={preview} target='_blank' className='btn'>Preview</a>
                    <div>
                        <a href={server} target='_blank' className='btn'>Server</a>
                        <a href={client} target='_blank' className='btn ml-2'>Client</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;