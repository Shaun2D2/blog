import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Card.scss';

const Card = ({ title, summary, icon, color }) => (
    <div className="card blog-card" style={{ backgroundColor: color }}>
        <h2 className="blog-card__title">{title}</h2>
        <FontAwesomeIcon icon={icon} className="blog-card__icon"/>
        <h3 className="blog-card__summary">{summary}</h3>
    </div>
);

export default Card;