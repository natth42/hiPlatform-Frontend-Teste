import React, { Fragment } from 'react';
import {
  Table
} from 'reactstrap';

const AlbumsTracksList = ({ tracks }) => {
  return (
    <Fragment>
      <Table role="table" hover responsive>
        <thead>
          <tr>
            <th>Música</th>
            <th>Artistas</th>
            <th>Duração</th>
          </tr>
        </thead>
        <tbody>
        {
          tracks.total > 0
          &&
          tracks.items.map((item) =>
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
                <td>{item.duration_ms}</td>
              </tr>
            )
          )
        }
        </tbody>
      </Table>
    </Fragment>
  );
}

export default AlbumsTracksList;