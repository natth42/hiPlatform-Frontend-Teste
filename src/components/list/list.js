import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
    Table
} from 'reactstrap';
import ListHeader from '../listHeader/listHeader';
import { connect } from 'react-redux';
import ListItems from '../listItems/listItems';

const List = ({typeFilter}) => {
  return (
    <Fragment>
    <Table role="table" hover responsive>
    <thead>
      <tr>
        <ListHeader type={typeFilter}/>
      </tr>
    </thead>
    <tbody>
        <ListItems />     
    </tbody>
  </Table>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    typeFilter: state.typeFilterReducer
  };
};

List.propTypes = {
  typeFilter: PropTypes.string
};

export default connect(
  mapStateToProps,
  null
)(List);