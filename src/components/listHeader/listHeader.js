import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ListHeader = ({ type }) => {
    const artist = ['#', 'artista', 'genero', 'popularidade'];
    const album = ['#', 'album', 'artistas', 'disponibilidade'];
    const track = ['#', 'música', 'artista', 'album', 'duração'];
    const header = type === 'artist' ? artist : type === 'album' ? album : track;

    return (
        <Fragment>
            {
                header
                &&
                header.map((item) =>
                    (
                        <th key={item} aria-label={item}>
                            {item}
                        </th>
                    )
                )
            }
        </Fragment>
    );
}

ListHeader.propTypes = {
    type: PropTypes.string
};

export default ListHeader;