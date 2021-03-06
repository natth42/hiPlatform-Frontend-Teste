import React, { Fragment } from 'react';
import { formatTime } from '../../utils/formatTime';
import PropTypes from 'prop-types';
import {
    Table
} from 'reactstrap';

const AlbumsTracksList = ({ tracks }) => {
    return (
        <Fragment>
            <Table role="table" hover responsive>
                <thead>
                    <tr>
                        <th aria-label="Música">Música</th>
                        <th aria-label="Artistas">Artistas</th>
                        <th aria-label="Duração">Duração</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tracks
                        &&
                        tracks.map((item) =>
                            (
                                <tr key={item.id}>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {
                                            Array.prototype.map.call(item.artists, artist => artist.name).join(", ")
                                        }
                                    </td>
                                    <td>{formatTime(item.duration_ms)}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </Table>
        </Fragment>
    );
}

AlbumsTracksList.propTypes = {
    tracks: PropTypes.arrayOf(PropTypes.object)
};

export default AlbumsTracksList;