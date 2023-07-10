import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className='container'>
        <div className='footer__container'>

            <div className="socialmedia__icons">
                <div className="socialmedia__gmail">
                <a href='#'> <img src='../src/images/gmail-icon.png'></img></a>
                <span>GMAIL</span>
                </div>

                <div className="socialmedia__linkedin">
                <a href='#'> <img src='../src/images/linkedin-icon.png'></img></a>
                <span>LINKEDIN</span>
                </div>

                <div className="socialmedia__github">
                <a href='#'> <img src='../src/images/github-icon.png'></img></a>
                <span>GITHUB</span>
                </div>
            
            </div>
                <div className="footer__pages">
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                </div>
        
                <h3>WEB DEVELOPER 2021</h3>
        </div>
        </div>
    );
};

