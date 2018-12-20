import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';

import history from '../utils/history';

import './Card.scss';

const Card = ({ title, summary, icon, color, path }) => (
    <div 
        className="card blog-card" 
        style={{ backgroundColor: color }}
        onClick={() => history.push(path)}
    >
        <h2 className="blog-card__title">{title}</h2>
        <FontAwesomeIcon icon={icon} className="blog-card__icon"/>
        <h3 className="blog-card__summary">{summary}</h3>
    </div>
);

export default Card;