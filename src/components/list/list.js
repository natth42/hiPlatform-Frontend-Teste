import React, { Fragment } from 'react';
import {
    Table,
    Container,
    Row,
    Col
} from 'reactstrap';
import ListHeader from '../list-header/listHeader';

const List = () => {
  return (
    <Fragment>
    <Table role="table" hover responsive>
    <thead>
      <tr>
        <ListHeader />
      </tr>
    </thead>
    <tbody>
      <tr>
            <td>
              <Container>
                <Row>
                  <Col xs="auto">
                  fota
                  </Col>
                  <Col>
                    Item 1
                  </Col>
                </Row>
              </Container>
            </td>
            <td>-</td>
            <td>-</td>
          </tr>
    </tbody>
  </Table>
    </Fragment>
  );
}

export default List;