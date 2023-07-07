import React from 'react';
import { Cardproject, Button } from '../components';


export const ProjectsSection = () => {
    return (
        <div className='projectssection__container'>
            <h2>Projects</h2>
            <Cardproject />
            <Cardproject />
            <Button value="SEE ALL PROJECTS" cssClass="wide__btn" url="/projectspage"></Button>

        </div>
    );
};

