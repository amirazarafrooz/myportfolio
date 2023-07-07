import React from 'react';
import { Cardproject, Button } from '../components';


export const ProjectsSection = () => {
    return (
        <div className='projectssection__container'>
            <Cardproject />
            <Cardproject />
            <Button value="SEE ALL PROJECTS" cssClass="wide__btn" url="/projectspage"></Button>

        </div>
    );
};

