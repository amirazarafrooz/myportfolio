import React from 'react';
import { Button } from './Button';


export const Cardproject = ({imgLink , title , tags , caption , repoUrl}) => {
    console.log({tags});
    return (
        <div className='cardproject__container'>
            <a href={repoUrl} target='_blank'><img src={imgLink}></img></a>
            <h3>{title}</h3>
            <div className='cardproject__tags'>
            {tags.map(({tech}) => <Button value={tech} cssClass="tag__btn"/>)}               
            </div>
            <p>{caption}</p>
        </div>
    );
};

