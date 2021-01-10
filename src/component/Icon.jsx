import React from 'react';
import './IconStyles.scss';

const Icon = ({ index }) => (
  <div className="icon-container">
    <div className="double-quote">
      <p>"</p>
    </div>
    <div className="icon-background" />
    <img src={require(`../assets/portrait-${index + 1}.jpg`).default} />
  </div>
);

export default Icon;
