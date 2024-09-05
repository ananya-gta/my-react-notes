import React from 'react'

const CoreComponent = (props) => {
  return (
    <li>
      <img src={props.image} alt={props.title} className="src" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

export default CoreComponent