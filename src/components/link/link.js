import React from 'react';
import PropTypes from 'prop-types';
import './link.scss';

export const Link = ({
    active,
    text,
    onClick
}) => {
    if (active) {
        return <button aria-label={`filtro atual: ${text}`} className="btn-active space-sides link-active">{text}</button>;
    }

    return (
        <button href='#'
            className="space-sides link"
            aria-label={`selecionar filtro: ${text}`}
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