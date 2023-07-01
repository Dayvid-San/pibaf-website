import React from 'react';

const NavbarsButton = (props) => {
  return (
    <div>
        <a href={props.link}>
            <button>{props.button}</button>
        </a>
    </div>
  );
};

export default NavbarsButton;
