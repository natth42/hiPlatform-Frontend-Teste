import React from 'react';
import PropTypes from 'prop-types';

export const Link = ({
    active,
    text,
    onClick
  }) => {
    if (active) {
      return <button className="btn-active space-sides link-active">{text}</button>;
    }
  
    return (
      <button href='#'
            className="space-sides link"
         onClick={e => {
           e.preventDefault();
           onClick();
         }}
      >
        {text}
      </button>
    );
  };

  Link.propTypes = {
    text: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func 
  };