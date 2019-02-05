import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ImageNameItem } from '../imageNameItem/imageNameItem';
import {
    Table
} from 'reactstrap';

const LatestsAlbumsList = ({ albums }) => {
    return (
        <Fragment>
            <Table role="table" hover responsive>
                <thead>
                    <tr>
                        <th aria-label="Album">Album</th>
                        <th aria-label="Artistas">Artistas</th>
                        <th aria-label="Lançamento">Lançamento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        albums
                        &&
                        albums.slice(0, 5).map((item) =>
                            (
                                <tr key={item.id}>
                                    <td>
                                        <ImageNameItem name={item.name} images={item.images} />
                                    </td>
                                    <td>
                                        {
                                            item.artists.length > 2 ?
                                                'Various artists'
                                                :
                                                item.artists.map((artist) => (
                                                    <div key={artist.id}>{artist.name}</div>
                                                ))
                                        }
                                    </td>
                                    <td>{item.release_date}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </Table>
        </Fragment>
    );
}

LatestsAlbumsList.propTypes = {
    albums: PropTypes.arrayOf(PropTypes.object)
};

export default LatestsAlbumsList;