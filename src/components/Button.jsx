import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({value , url, cssClass ,submitFormHandler}) => {
    return (
        <div>
            <button onClick={submitFormHandler} className={cssClass}><Link to={url}>{value}</Link> </button>
        </div>
    );
};

