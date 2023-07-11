import React from 'react';
import { Button } from './Button';


export const HeroSection = () => {
    return (
        <div className="herosection"> 
            <div className="herosection__image">
            <img className='herosection__image' src='../src/images/blogging 1.svg'></img>
            </div>
            <div className="herosection__text">
            <h3>DEVELOPER</h3>
            <h1>Amir hosein Azarafrooz</h1>
            <p>front-end developer 📌 Tehran</p>
            <div className="desktop__button">
            <Button value="Contact Me" cssClass="normal__btn" url="/Contact"></Button>
            </div>
            </div>
        </div>
    );
};