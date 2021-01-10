import React from 'react';
import Icon from './Icon';

import './CardStyles.scss';

const Card = ({
  onNext,
  onPrev,
  data: { name, jobTitle, description },
  index,
  onRandom
}) => (
  <div className="card">
    <Icon index={index} />
    <h2 className="subtitle">{name}</h2>
    <h2 className="job-position">{jobTitle.toUpperCase()}</h2>
    <p>{description}</p>
    <div className="button-container">
      <button onClick={onPrev}>&lt;</button>
      <button onClick={onNext}>&gt;</button>
    </div>
    <button onClick={onRandom} className="next-button">Surpise Me</button>
  </div>
);

export default Card;
