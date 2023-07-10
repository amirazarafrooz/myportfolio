import React from 'react';
import { Cardproject, Button } from '../components';
import { myprojects } from '../data/Project-data';


export const ProjectsSection = () => {
    return (
        <div className='projectssection__container'>
<div className='projrct__card'>
            <h2>Projects</h2>
            <div className="productList">
          {myprojects.filter(({id}) => id<2)
          .map(({title,imgLink,tags,caption}) => <Cardproject title={title} tags={tags} caption={caption} imgLink={imgLink}/>)}
        </div>
        </div>
            <Button value="SEE ALL PROJECTS" cssClass="wide__btn" url="/Projects"></Button> 
        </div>
    );
};

