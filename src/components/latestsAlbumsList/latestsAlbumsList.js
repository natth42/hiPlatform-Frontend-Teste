import React, { Fragment } from 'react';
import {
  Container,
  Col,
  Row,
  Table
} from 'reactstrap';

const LatestsAlbumsList = ({ albums }) => {
  return (
    <Fragment>
      <Table role="table" hover responsive>
        <thead>
          <tr>
            <th>Album</th>
            <th>Artistas</th>
            <th>Lançamento</th>
          </tr>
        </thead>
        <tbody>
        {
          albums.total > 0
          &&
          albums.items.slice(0, 5).map((item) =>
            (
              <tr key={item.id}>
                <td>
                  <Container>
                    <Row>
                      <Col xs="auto">
                        {
                          item.images[0]
                          &&
                          <img src={item.images[0].url} alt="" height="64" width="64" />
                        }
                      </Col>
                      <Col>
                        {item.name}
                      </Col>
                    </Row>
                  </Container>
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

export default LatestsAlbumsList;