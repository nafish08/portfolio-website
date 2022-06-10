import React from 'react';

const Project = ({ project }) => {
    const { img, name, description, preview, client, server } = project;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div class="card-body">
                <h2 class="card-title p-3">{name}</h2>
                <p>{description}</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">React.js</div>
                    <div class="badge badge-outline">Node.js</div>
                </div>
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