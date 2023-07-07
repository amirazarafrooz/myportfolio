import React from 'react';
import { Button } from './Button';

export const Cardproject = () => {
    return (
        <div className='cardproject__container'>
            <img src='../src/images/image.svg'></img>
            <h3>TITLE PROJECT</h3>
            
            <div className='cardproject__tags'>
                <Button value="React" cssClass="tag__btn" ></Button>
                <Button value="Javascript" cssClass="tag__btn" ></Button>
                <Button value="PostgreSQL" cssClass="tag__btn" ></Button>
                <Button value="redux" cssClass="tag__btn" ></Button>
             </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
    );
};

