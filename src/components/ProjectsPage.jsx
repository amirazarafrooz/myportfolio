import React from 'react';
import { Cardproject } from './Cardproject';
import { myprojects } from '../data/Project-data';

export const ProjectsPage = () => {
    return (
        <div className='progectpage'>
        <div className="projectpage__container">
            <h2>Projects</h2>
        <div className='projectpage__cards'>
           {myprojects.map(({title,imgLink,tags,caption,repoUrl}) => <Cardproject title={title} tags={tags} caption={caption} imgLink={imgLink} repoUrl={repoUrl}/>)}
        </div>
        </div>
        </div>
    );
};

