import React from 'react';
import { Button } from './Button';


export const Cardproject = ({imgLink , title , tags , caption}) => {
    console.log({tags});
    return (
        <div className='cardproject__container'>
            <img src={imgLink}></img>
            <h3>{title}</h3>
            <div className='cardproject__tags'>
            {tags.map(({tech}) => <Button value={tech} cssClass="tag__btn"/>)}               
            </div>
            <p>{caption}</p>
        </div>
    );
};

