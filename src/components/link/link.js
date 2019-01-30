import React from 'react';

export const Link = ({
    active,
    text,
    onClick
  }) => {
    if (active) {
      return <a className="space-sides link-active">{text}</a>;
    }
  
    return (
      <a href='#'
            className="space-sides link"
         onClick={e => {
           e.preventDefault();
           onClick();
         }}
      >
        {text}
      </a>
    );
  };