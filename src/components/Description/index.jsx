import React from 'react';

const Description = (props) => {
  return (
        <>
          {props.title}
          <p>
            {props.text}
          </p>
        </>
  );
};

export default Description;