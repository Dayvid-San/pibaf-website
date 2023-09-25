import React from 'react';

const NavbarsButton = (props) => {
  return (
        <a onCLick={props.link} target={props.target}>
            <button>{props.label}</button>
        </a>
  );
};

export default NavbarsButton;