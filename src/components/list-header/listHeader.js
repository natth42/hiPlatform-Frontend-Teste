import React, { Fragment } from 'react';

const ListHeader = () => {
  return (
    <Fragment>
        <th scope="col">Playlist</th>
        <th scope="col">Criada Por</th>
        <th scope="col">Músicas</th>
    </Fragment>
  );
}

export default ListHeader;