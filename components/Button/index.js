import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button className="custom-button" onClick={props.clickHandler}>
      {' '}
      {props.children}
      <style jsx>
        {`
          .custom-button {
            border: 1px solid grey;
            padding: 2em;
            background-color: ${props.color || 'blue'};
            color: white;
            height: 3em;
            width: 10em;
          }
        `}
      </style>
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string
}

export default Button;
