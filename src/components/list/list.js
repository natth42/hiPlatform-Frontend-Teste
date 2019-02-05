import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
    Table
} from 'reactstrap';
import ListHeader from '../listHeader/listHeader';
import { connect } from 'react-redux';
import ListItems from '../listItems/listItems';
import { Loading } from '../loading/loading';

const List = ({ typeFilter, loading }) => {
    return (
        <Fragment>
            <Table role="table" hover responsive>
                <thead>
                    <tr>
                        <ListHeader type={typeFilter} />
                    </tr>
                </thead>
                <tbody>
                    <ListItems />
                </tbody>
            </Table>
            <Loading loading={loading} />
        </Fragment>
    );
}

const mapStateToProps = state => {
    return {
        typeFilter: state.typeFilterReducer,
        loading: state.loadingReducer
    };
};

List.propTypes = {
    typeFilter: PropTypes.string,
    loading: PropTypes.bool
};

export default connect(
    mapStateToProps,
    null
)(List);