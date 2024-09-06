import React from "react";

const TabButton = ({isSelected, onSelect, children}) => { //destructuring
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
};

export default TabButton;
