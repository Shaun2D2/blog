import React from 'react';

import './Card.scss';

const Card = ({ title, summary }) => (
    <div className="card blog-card">
        <h2 className="blog-card__title">{title}</h2>
        <h3 className="blog-card__summary">{summary}</h3>
    </div>
);

export default Card;