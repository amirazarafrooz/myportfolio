import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({value , url, cssClass}) => {
    return (
        <div>
            <button className={cssClass}><Link to={url}>{value}</Link> </button>
        </div>
    );
};

