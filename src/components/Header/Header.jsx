import React from 'react'
import LOGO from "../../assets/react-core-concepts.png";
const terms = ["Fundamental", "Crucial", "Core"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const Header = () => {
  return (
    <header>
      <img src={LOGO} alt="Stylized atom" />
      <h1>Ananya's React Notes</h1>
      <p>
        {terms[getRandomInt(3)]} React concepts needed for almost any app you
        are going to build!
      </p>
    </header>
  );
}

export default Header